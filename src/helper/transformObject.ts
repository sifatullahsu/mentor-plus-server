/* eslint-disable @typescript-eslint/no-explicit-any */
type FlattenObject<T> = {
  [K in keyof T]: T[K] extends Array<any> ? T[K] : T[K] extends object ? FlattenObject<T[K]> : T[K]
}

type InputObject = {
  [key: string]: any
}

type OutputObject = FlattenObject<InputObject>

const transformObject: (input: InputObject) => OutputObject = input => {
  const output: OutputObject = {}

  function flattenObject(obj: InputObject, prefix = ''): void {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        output[prefix + key] = obj[key]
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], prefix + key + '.')
      } else {
        output[prefix + key] = obj[key]
      }
    }
  }

  flattenObject(input)

  return output
}

export default transformObject

/* 
type FlattenObject<T> = {
  [K in keyof T]: T[K] extends object ? FlattenObject<T[K]> : T[K]
}

type InputObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

type OutputObject = FlattenObject<InputObject>

const transformObject: (input: InputObject) => OutputObject = input => {
  const output: OutputObject = {}

  function flattenObject(obj: InputObject, prefix = ''): void {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], prefix + key + '.')
      } else {
        output[prefix + key] = obj[key]
      }
    }
  }

  flattenObject(input)

  return output
}

export default transformObject
 */
