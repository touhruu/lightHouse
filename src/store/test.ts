import { Module } from "vuex";
import { State } from ".";

const test: Module<State['test'], State> = {

    namespaced: true,

    state: () => ({ 
        data: 'кусь' 
    }),
    getters: {
        getData: state => state.data
    },
    mutations: {
        setData: (state, data) => {
            state.data = data;
        }
    }
}

export default test;