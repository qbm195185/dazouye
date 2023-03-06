import request from "@/utils/request";

export const getallchikazhe = () => request({ url: 'chikazhe', method: 'get' })

export const getonechikazhe = (params) => request({ url: `chikazhe/getone/${params}`, method: 'get' })

export const updatechikazhe = (form) => request({ url: 'chikazhe/updateChikazhe', method: 'post', data: form })

export const deletechikazhe = (params) => request({ url: `chikazhe/deleteChikazhe/${params}`, method: 'get',})

export const addchikazhe = (form)=>request({url:'chikazhe/addChikazhe',method:'post',data:form})