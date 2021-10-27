const state = {
    user: { name: 'Jean' },
    isConnected: false
}

const getters = {
    /*auth(state) {
        return { state.user, state.isConnected }
    }*/
    user(state) {
        return state.user;
    },
    isConnected(state) {
        return state.isConnected;
    }
}

const mutations = {

}

const actions = {

}

export default {
    state, getters, actions
}