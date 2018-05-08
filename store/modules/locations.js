import axios from 'axios'

export default {
  state: {
    locations: [],
    location: {}
  },
  getters: {
    getLocations: state => {
      return state.locations;
    },
    getLocation: state => {
      return state.location;
    }
  },
  mutations: {
    clearLocations: state => {
      state.locations = [];
    },
    clearLocation: state => {
      state.location = {};
    },
    setLocations: (state, payload) => {
      state.locations = payload;
    },
    setLocation: (state, payload) => {
      state.location = payload;
    }
  },
  actions: {
    loadLocations: ({commit}, payload) => {
      commit('clearLocations');
      return new Promise((resolve, reject) => {

        axios.get('https://jobfair-online.net/api/location/regions', {})
          .then(response => {
            commit('setLocations', response.data);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          })
      });
    }
  }
}

