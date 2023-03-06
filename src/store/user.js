import jsCookie from 'js-cookie';
import { getLogin } from "../api/user";
import router from "../router";

const state = {
    name: '',
}

const mutations = {
    setname(state,req){
        state.name = req
    }
}

const actions = {
    async login(cotext, form) {
        // console.log('login111');
        // console.log('login2');
        const res = await getLogin(form)
        // console.log(token);
        if (res.data.total == 1) {
            jsCookie.set('token', res.data.token)
            console.log(res);
            cotext.commit('setname',res.data.users[0].USENAME)
            router.push('/home')
        } else {
            alert('error')
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