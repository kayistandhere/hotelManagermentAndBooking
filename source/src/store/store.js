import { createStore } from 'vuex'

const store = new createStore({
  state: {
    formData: {
    },
    formDate: {    // Dữ liệu chứa của bookRoom
    }
  },
  mutations: {
    updateFormData(state, formData) {
      state.formData = formData;
    },
    updateFormDate(state, formDate) {
      state.formDate = formDate;
    }
  },
  actions: {
    saveFormData({ commit }, formData) {
      commit('updateFormData', formData);
    },
    saveFormDate({ commit }, formDate) {
      commit('updateFormDate', formDate);
    }
  },
  getters: {
    getFormData: state => state.formData,
    getFormDate: state => state.formDate
  }
})

export default store
