import { getallfanka, getonefanka, deletefanka,updatefanka,addfanka } from "../api/fanka";

const state = {
    allfanka: [],
    onefanka: []
}

const mutations = {
    setallfanka(state, req) {
        state.allfanka = req
    },
    setonefanka(state, req) {
        state.onefanka = req
    }
}

const actions = {
    async getallfanka(context) {
        const res = await getallfanka();
        console.log(res);
        if (res.status == 200) {
            context.commit('setallfanka', res.data.users)
        }
    },
    async getonefanka(context, params) {
        const res = await getonefanka(params);
        console.log(res);
        if (res.status == 200 && res.data.users.length > 0) {
            context.commit('setonefanka', res.data.users)
        } else {
            alert('查找失败')
        }
    },
    async deletefanka(context, params) {
        // console.log(params);
        const res = await deletefanka(params);
        console.log(res);
        if (res.status == 200 && res.data.rowsAffected == 1) {
            alert('删除成功')
        } else {
            alert('删除失败')
        }
    },
    async updatefanka(context,params){
        const res = await updatefanka(params)
        console.log(res);
        if (res.status == 200 && res.data.rowsAffected == 1) {
            alert('修改成功')
        } else {
            alert('修改失败')
        }
    },
    async addfanka(context,params){
        const res = await addfanka(params)
        console.log(res);
        if (res.status == 200 && res.data.rowsAffected == 1) {
            alert('添加成功')
        } else {
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