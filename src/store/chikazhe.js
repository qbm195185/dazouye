import { getallchikazhe, getonechikazhe,updatechikazhe,deletechikazhe,addchikazhe } from "../api/chikazhe";

const state = {
    allchikazhe: [],
    onechikazhe: []
}

const mutations = {
    setallchikazhe(state, req) {
        state.allchikazhe = req
    },
    setonechikazhe(state, req) {
        state.onechikazhe = req
    }
}

const actions = {
    async getallchikazhe(context) {
        const res = await getallchikazhe();
        console.log(res);
        if (res.status == 200) {
            context.commit('setallchikazhe', res.data.users)
        }
    },
    async getonechikazhe(context,params) {
        const res = await getonechikazhe(params);
        console.log(res);
        if (res.status == 200 && res.data.users.length ==1) {
            context.commit('setonechikazhe', res.data.users)
        }else{
            alert('查找失败')
        }
    },
    async updatechikazhe(context,params) {
        // console.log(params);
        const res = await updatechikazhe(params);
        console.log(res);
        if (res.status == 200 && res.data.users.length ==1) {
            alert('更改成功')
        }else{
            alert('查找失败')
        }
    },
    async deletechikazhe(context,params) {
        // console.log(params);
        const res = await deletechikazhe(params);
        console.log(res);
        if (res.status == 200 && res.data.rowsAffected ==1) {
            alert('删除成功')
        }else{
            alert('删除失败')
        }
    },
    async addchikazhe(context,params) {
        // console.log(params);
        const res = await addchikazhe(params);
        console.log(res);
        if (res.status == 200 && res.data.rowsAffected ==1) {
            alert('添加成功')
        }else{
            alert('添加失败')
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