
const app = {
    namespaced: true,
    state: {
        DEVICE: null,
        BASE: null,
        LOGIN: false
    },
    mutations: {
        setDevice(state,type){
            state.DEVICE = type;
        },
        setBase(state,data){
            state.BASE = data;
        },
        setLogin(state,data){
            state.LOGIN = data;
        },
    },
    actions: {

    }
}

export default app
