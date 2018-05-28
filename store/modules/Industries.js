import axios from 'axios'

export default {
  state: {
    industries: [],
    industry: {}
  },
  getters: {
    getIndustries: state => {
      return state.industries;
    },
    getIndustry: state => {
      return state.industry;
    }
  },
  mutations: {
    clearIndustries: state => {
      state.industries = []
    },
    setIndustries: (state, payload) => {
      state.industries = payload;
    },
    setIndustry: (state, payload) => {
      state.industry = payload
    }
  },
  actions: {
    loadIndustries: ({commit}, payload) => {
      commit('clearIndustries');

      return new Promise((resolve, reject) => {
        axios.get('https://jobfair-online.net/api/companies/industries')
          .then(response => {
            commit('setIndustries', response.data);
            resolve(response);
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  }
}
