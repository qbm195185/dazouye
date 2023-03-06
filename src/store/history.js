import { getall,getone } from "../api/history";

const state = {
    allhistory: [],
    onehistory:[]
}

const mutations = {
    setallhistory(state,req){
        state.allhistory = req
    },
    setonehistory(state,req){
        state.onehistory = req
    }
}

const actions = {
    async getallhistory(context) {
        const res = await getall()
        // console.log(res);
        if (res.status == 200) {
            context.commit('setallhistory', res.data.users)
        }
    },
    async getonehistory(context,params) {
        const res = await getone(params)
        // console.log(res);
        if (res.status == 200) {
            context.commit('setonehistory', res.data.users)
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}