import axios from 'axios'

export default {
  state: {
    job_categories: [],
    job_category: {}
  },
  getters: {
    getJobCategories: state => {
      return state.job_categories;
    },
    getJobCategory: state => {
      return state.job_category;
    }
  },
  mutations: {
    clearJobCategories: state => {
      state.job_categories = [];
    },
    clearJobCategory: state => {
      state.job_category = {};
    },
    setJobCategories: (state, payload) => {
      state.job_categories = payload;
    },
    setJobCategory: (state, payload) => {
      state.job_category = payload;
    }
  },
  actions: {
    loadJobCategories: ({commit}, payload) => {
      commit('clearJobCategories');
      return new Promise((resolve, reject) => {

        axios.get('https://jobfair-online.net/api/jobs/categories', {
        })
        .then(response => {
          commit('setJobCategories', response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        })
      });
    }
  }
}
