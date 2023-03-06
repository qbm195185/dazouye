import request from "@/utils/request";

export const getLogin = (data)=>request({url:'users/login',method:'post',data})