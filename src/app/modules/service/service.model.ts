import httpStatus from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../../error/ApiError'
import { xHours, xLanguages, xStatus } from '../../../global/constant'
import User from '../user/user.model'
import { iService, iServiceModel } from './service.interface'

const serviceSchema = new Schema<iService, iServiceModel>(
  {
    uid: { type: Number, trim: true, unique: true, immutable: true, default: 0 },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: '' },
    image: { type: String, trim: true, default: '' },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, required: true, enum: xStatus, default: 'inactive' },
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
    languages: [{ type: String, enum: xLanguages }],
    packages: [
      {
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        hours: { type: Number, required: true, enum: xHours },
        price: { type: Number, required: true }
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

serviceSchema.statics.uidGenerator = async () => {
  const res = await Service.findOne({}).select({ uid: 1, _id: 0 }).sort({ uid: -1 }).lean()
  const uid = res?.uid ? Number(res.uid) + 1 : 1000 + 1

  return uid
}

serviceSchema.pre('save', async function (next) {
  const isMentorRole = await User.count({
    $and: [{ _id: this.mentor }, { role: 'mentor' }]
  })

  if (!isMentorRole) throw new ApiError(httpStatus.BAD_REQUEST, 'Mentor _id not valid')

  const isCategoryAlreadyCreated = await Service.count({
    $and: [{ category: this.category }, { mentor: this.mentor }]
  })

  if (isCategoryAlreadyCreated) throw new ApiError(httpStatus.BAD_REQUEST, 'This service already created')

  this.uid = await Service.uidGenerator()

  next()
})

const Service = model<iService, iServiceModel>('Service', serviceSchema)

export default Service
