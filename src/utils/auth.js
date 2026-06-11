import { setItem, getItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'

export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

export function setTimeStamp() {
  return setItem(TIME_STAMP, Date.now())
}

export function isCheckTimeOut() {
  // 当前时间戳与缓存时间戳对比
  const nowDate = Date.now()
  const timeStamp = getTimeStamp()
  console.log('timeStamp', timeStamp)
  console.log('nowDate', nowDate)
  console.log('nowDate - timeStamp', nowDate - timeStamp)
  return nowDate - timeStamp > TOKEN_TIMEOUT_VALUE
}
