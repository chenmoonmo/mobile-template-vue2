import dayjs from 'dayjs'

// 深克隆
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  let cpObj = obj instanceof Array ? [] : {}
  for (let key in obj) cpObj[key] = deepClone(obj[key])
  return cpObj
}