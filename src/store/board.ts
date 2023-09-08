import { Module } from "vuex";
import { State } from ".";
import api from '../api/index.ts'

const board: Module<State['board'], State> = {

    namespaced: true,

    state: () => ({ 
        boards: [] 
    }),
    getters: {
        // getBoards: state => state.boards
    },
    actions: {
        async getBoards ({ commit }) {
            const boards = await api.get('board')
            commit('setBoards', boards.data)
        }
    },
    mutations: {
        setBoards: (state, boards) => {
            state.boards = boards
        }
    }
}

export default board;