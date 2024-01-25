
const state = {
    formData: {
      checkIn: '',
      checkOut: '',
      peopleNumber: '',
      typeRoomId: '',
    },
  };
  const mutations = {
    updateFormData(state, formData) {
      state.formData = formData;
    },
  };
  
  const actions = {
    setFormData({ commit }, formData) {
      commit('updateFormData', formData);
    },
  };
  
  const getters = {
    getFormData(state) {
      return state.formData;
    },
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };