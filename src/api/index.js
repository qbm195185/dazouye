import request from "@/utils/request";

export const getLogin = (body)=>request({url:'user/login',method:'post',data})