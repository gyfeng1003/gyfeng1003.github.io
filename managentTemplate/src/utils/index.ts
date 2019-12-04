// Parse the time to string
export const parseTime = (
  time?: object | string | number,
  cFormat?: string
): string | null => {
  if (time === undefined) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date: Date
  if (typeof time === 'object') {
    date = time as Date
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj: { [key: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      return '0' + value
    }
    return String(value) || '0'
  })
  return timeStr
}

// Format and filter json data using filterKeys array
export const formatJson = (filterKeys: any, jsonData: any) =>
  jsonData.map((data: any) => filterKeys.map((key: string) => {
    if (key === 'timestamp') {
      return parseTime(data[key])
    } else {
      return data[key]
    }
  }))

// Check if an element has a class
export const hasClass = (ele: HTMLElement, className: string) => {
  return !!ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

// Add class to element
export const addClass = (ele: HTMLElement, className: string) => {
  if (!hasClass(ele, className)) ele.className += ' ' + className
}

// Remove class from element
export const removeClass = (ele: HTMLElement, className: string) => {
  if (hasClass(ele, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

// Toggle class for the selected element
export const toggleClass = (ele: HTMLElement, className: string) => {
  if (!ele || !className) {
    return
  }
  let classString = ele.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  ele.className = classString
}

export const convertObj = (data: object) => {
  let queryStr = JSON.stringify(data)
  queryStr = queryStr.replace(/:/g, '=')
  queryStr = queryStr.replace(/"/g, '')
  queryStr = queryStr.replace(/,/g, '&')
  queryStr = queryStr.substring(1, queryStr.length - 1)
  return queryStr
}

/**
 * 昨日区间
 */
export function getYesterday () {
  let now = new Date()
  let yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
  let now1 = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return {
    startDate: yesterday.getTime(),
    endDate: now1.getTime() - 1000
  }
}

/**
 * 获取上月区间
 */
export function getLastMonth () {
  let now = new Date()
  let lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
  return {
    startDate: lastMonth.getTime(),
    endDate: now.getTime()
  }
}

export function getIntegralTime () {
  let now = new Date()
  let integralTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours())
  return integralTime.getTime()
}
