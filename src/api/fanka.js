import request from "@/utils/request";

export const updatefanka = async (data) => await request({ url: 'fanka/update', method: 'post', data: data })

export const getallfanka = () => request({ url: 'fanka', method: 'get' })

export const getonefanka = (params) => request({ url: `fanka/getone/${params}`, method: 'get' })

export const deletefanka = (params) => request({url: `fanka/deletfanka/${params}`, method: 'get'})

export const addfanka = (params) => request({url:'fanka/addfanka',method:'post',data:params})