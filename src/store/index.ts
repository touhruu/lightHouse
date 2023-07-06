import { createStore } from "vuex";
import test from './test'
export interface State{
    test: { //это название объекта с файла test.ts
        data: string //состояние модуля test
    }
}
export const store = createStore<State>({ 
    modules: { test }
})