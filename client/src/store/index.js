import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

//要管理的状态
const state = {
    isAuthenticated:false, // 是否认证成功 成功后修改为true 
    user:{},
    profile:{}, //存储用户信息
    loading:false,
    profiles:[]
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})