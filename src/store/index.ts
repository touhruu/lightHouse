import { createStore } from "vuex";
import test from './test'
import board from './board'
import auth from './auth'

export interface State{
    test: { //это название объекта с файла test.ts
        data: string //состояние модуля test
    },
    board: {
        boards: []
    },
    auth: {
        auth: null,
        loadingStatus: null
    }
}
export const store = createStore<State>({ 
    modules: { board, test, auth }
})