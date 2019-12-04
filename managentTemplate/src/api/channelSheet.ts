import request from '@/utils/request'
import { IChannelForm } from '@/api/types'
import { convertObj } from '@/utils'

export const defaultChannelForm: IChannelForm = {
  'firstChannel': '',
  'secondChannel': '',
  'thirdChannel': '',
  'startDate': '',
  'endDate': ''
}

export const getChannelList = (data: any, config = {}) => {
  return request({
    url: '/get-register-channel',
    method: 'post',
    data
  })
}
