import request from "@/utils/request";

export const addhistory = async (data) => await request({ url: 'history/addone', method: 'post', data: data })