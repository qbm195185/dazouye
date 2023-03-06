import request from "@/utils/request";
import jsCookie from 'js-cookie';

export const getall = ()=>request({url:'history',method:'get',headers:{'authorization':jsCookie.get('token')}})

export const getone = (params)=>request({url:`history/getone/${params}`,method:'get',})