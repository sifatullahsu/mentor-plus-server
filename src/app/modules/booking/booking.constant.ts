export const bookingQueryFields: string[] = [
  'service:$eq',
  'user:$eq',
  'mentor:$eq',
  'status:$eq',
  'price:$eq,$gt,$gte,$lt,$lte',
  'hours:$eq,$gt,$gte,$lt,$lte'
]
