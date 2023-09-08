import { Module } from "vuex";
import { State } from ".";
import api from '../api/index.ts'

const auth: Module<State['auth'], State> = {

    namespaced: true,

    state: () => ({ 
        auth: null,
        loadingStatus: null 
    }),
    actions: {
        async authUser ({ commit }, auth) {
            const user = await api.post('auth/login', auth)
            localStorage.setItem('token', user.data.token)
            commit('authUser', user.data)
        },

        async whoAmI({ commit }){
            try{
                const user = await api.get('auth/whoAmI')
                commit('authUser', user.data)
            }
            catch(e){
                console.log('Пользователь не авторизован')
            }
        },

        async logout({ commit }){
            localStorage.removeItem('token')
            commit('authUser', null)
        },

        async registration({ commit }, user){
            commit('updateLoadingStatus', 'loading')
            try{
                await api.post('auth/registration', user)
                commit('updateLoadingStatus', 'success')
            }
            catch(e){
                commit('updateLoadingStatus', 'error')
            }
        }
    },
    mutations: {
        authUser: (state, user) => {
            state.auth = user
        },
        updateLoadingStatus: (state, status) => {
            state.loadingStatus = status
        }
    }
}

export default auth;