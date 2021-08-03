const state = {
  userProfile: {},
};

const getters = {
  userProfile: (state) => {
    return state.userProfile;
  },
};

const mutations = {
  UPDATE_USER_PROFILE(state, userProfile) {
    state.userProfile = userProfile;
  },
};

const actions = {
  updateUserProfile({ commit }, payload) {
    commit("UPDATE_USER_PROFILE", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};