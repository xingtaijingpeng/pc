
const app = {
    namespaced: true,
    state: {
        DEVICE: null,
        BASE: null
    },
    mutations: {
        setDevice(state,type){
            state.DEVICE = type;
        },
        setBase(state,data){
            state.BASE = data;
        }
    },
    actions: {

    }
}

export default app
