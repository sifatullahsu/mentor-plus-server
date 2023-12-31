import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import config from '../../../config'

import { xCountryCode, xGender, xRole, xStatus } from '../../../global/constant'
import slugMaker from '../../../shared/files/slugMaker'
import { iUser, iUserModel } from './user.interface'

const userSchema = new Schema<iUser, iUserModel>(
  {
    username: { type: String, required: true, trim: true, unique: true },
    name: {
      firstName: { type: String, required: true, trim: true },
      lastName: { type: String, required: true, trim: true }
    },
    email: {
      address: { type: String, required: true, trim: true, unique: true },
      is_verified: { type: Boolean, required: true, default: false }
    },
    number: {
      cc: { type: String, required: true, enum: xCountryCode },
      digits: { type: String, required: true, trim: true },
      is_verified: { type: Boolean, required: true, default: false }
    },
    gender: { type: String, required: true, enum: xGender },
    image: { type: String, trim: true, default: '' },
    password: { type: String, required: true, select: 0 },
    role: { type: String, required: true, enum: xRole, default: 'student' },
    status: { type: String, required: true, enum: xStatus, default: 'active' },
    about: { type: String, trim: true, default: '' },
    education: [
      {
        institute: { type: String, trim: true },
        passing_year: { type: Number },
        cgpa: { type: Number }
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.statics.hashGenerator = async password => {
  return await bcrypt.hash(password, Number(config.soltRounds))
}

userSchema.statics.checkPassword = async (givenPassword, savedPassword) => {
  return await bcrypt.compare(givenPassword, savedPassword)
}

userSchema.index({ 'number.cc': 1, 'number.digits': 1 }, { unique: true })

userSchema.pre('save', async function (next) {
  this.username = slugMaker(this.username)
  this.password = await User.hashGenerator(this.password)

  next()
})

userSchema.pre('findOneAndUpdate', async function () {
  const user = <Partial<iUser>>this.getUpdate()

  if (user?.username) {
    user.username = slugMaker(user.username)
  }

  if (user?.password) {
    user.password = await User.hashGenerator(user.password)
  }
})

const User = model<iUser, iUserModel>('User', userSchema)

export default User
