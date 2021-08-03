const state = {
  loadingPage: false,
};

const getters = {
  loadingPage: (state) => {
    return state.loadingPage;
  },
};

const mutations = {
  UPDATE_LOADING_PAGE(state, loadingPage) {
    state.loadingPage = loadingPage;
  },
};

const actions = {
  updateLoadingPage({ commit }, payload) {
    commit("UPDATE_LOADING_PAGE", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
