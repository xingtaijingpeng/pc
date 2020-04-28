
const app = {
    namespaced: true,
    state: {
        DEVICE: null,
        BASE: null,
        LOGIN: false,
        LOGINTYPE: 'login',
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
        setLoginType(state,data){
            state.LOGINTYPE = data;
        },
    },
    actions: {

    }
}

export default app
