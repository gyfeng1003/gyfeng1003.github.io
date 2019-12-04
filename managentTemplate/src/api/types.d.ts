/*核销*/
export interface IForm {
  "startDate": string | number,
  "endDate": string | number,
  "merchantName": string,
  "merchantPhone": string,
  "couponStatus": string,
  "goodsName": string
}

/**
 * 会员注册查询表单
 */
export interface IMemeberShipForm {
  "startDate": string | number,
  "endDate": string | number
}

/**
 * 渠道报表查询表单
 */
export interface IChannelForm {
  "firstChannel": string,
  "secondChannel": string,
  "thirdChannel": string,
  "startDate": string | number,
  "endDate": string | number
}
