const state = {
    user: JSON.parse(sessionStorage.getItem('USER')),
    isConnected: sessionStorage.getItem('USER') != null
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
    loginMut(state, payload) {
        state.user = payload;
        state.isConnected = true;
    },
    logoutMut(state) {
        state.user = null;
        state.isConnected = false;
    }
}

const actions = {
    login: async (storeContext, login, password) => {
        //appel serveur
        const user = { name: 'Bob', login: login, token: 'DGFSDGQST43A5TERZTFGS', role: 'admin' };
        storeContext.commit('loginMut', user)
        sessionStorage.setItem('USER', JSON.stringify(user));
    },
    logout(storeContext) {
        storeContext.commit('logoutMut');
        sessionStorage.removeItem('USER');
    }
}

export default {
    state, getters, mutations, actions
}