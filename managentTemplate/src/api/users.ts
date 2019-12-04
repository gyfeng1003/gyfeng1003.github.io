import request from '@/utils/request'
import { IForm, IMemeberShipForm } from '@/api/types'
import { convertObj, getYesterday } from '@/utils'

export const defaultCancelVerifyForm: IForm = {
  'startDate': '',
  'endDate': '',
  'merchantName': '',
  'merchantPhone': '',
  'couponStatus': '',
  'goodsName': ''
}
export const defaultMemberShipForm: IMemeberShipForm = {
  'startDate': getYesterday().startDate,
  'endDate': getYesterday().endDate
}

export const getUsers = (params: any) =>
  request({
    url: '/users',
    method: 'get',
    params
  })

export const getUserInfo = (data: any) =>
  request({
    url: '/users/info',
    method: 'post',
    data
  })

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get'
  })

export const updateUser = (username: string, data: any) =>
  request({
    url: `/users/${username}`,
    method: 'put',
    data
  })

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'delete'
  })

export const login = (data: any) =>
  request({
    url: '/users/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })

export const register = (data: any) =>
  request({
    url: '/users/register',
    method: 'post',
    data
  })

export const getCouponVerifyList = (data: any, config = {}) => {
  return request({
    url: '/getCouponVerifyList',
    method: 'post',
    data,
    ...config
  })
}

export const exportExcel = (url: string, query: any) => {
  let queryStr = convertObj(query)
  let href = `${process.env.VUE_APP_BASE_API}${url}?${queryStr}`
  let str = href
  window.open(str)
}

/**
 * 获取时间段统计注册会员数
 * @param data
 * @param config
 */
export const getMemberShipList = (data: any, config = {}) => {
  return request({
    url: '/get-user-report',
    method: 'post',
    data
  })
}

/**
 * 获取累计注册会员数
 * @param data
 * @param config
 */
export const getRegisterTotal = (data: any, config = {}) => {
  return request({
    url: '/get-register-total',
    method: 'post',
    data
  })
}
