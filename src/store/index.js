import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user"
import tab from './tab'
import chikazhe from "./chikazhe"
import fanka from "./fanka"
import history from "./history";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tab,
        user,
        chikazhe,
        fanka,
        history
    }
})