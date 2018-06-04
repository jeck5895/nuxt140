import axios from 'axios';

export default {
  state: {
    jobseeker: {},
    jobseekers: [],
    jobseekerLoadingState: false
  },
  getters: {
    getJobseeker: state => {
      return state.jobseeker;
    },
    getJobseekers: state => {
      return state.jobseekers;
    },
    getJobseekerState: state => {
      return state.jobseekerLoadingState
    }
  },
  mutations: {
    clearJobseeker: state => {
      state.jobseeker = {};
    },
    clearJobseekers: state => {
      state.jobseekers = [];
    },
    setJobseeker: (state, payload) => {
      state.jobseeker = payload;
    },
    setJobseekers: (state, payload) => {
      state.jobseekers = payload;
    },
    setJobseekerLoadingState: (state, payload) => {
      state.jobseekerLoadingState = payload
    }
  },
  actions: {
    clearJobseeker: ({commit}) => {
      commit('clearJobseeker');
    },
    loadJobseekers: ({commit}, payload) => {
      commit('clearJobseekers')
      return new Promise((resolve, reject) => {
        axios.get()
        .then(res => {

        })
        .catch(err => {

        })
      });
    },
    storeJobseeker: ({commit}, payload) => {

      commit('setJobseekerLoadingState', true);

      return new Promise((resolve, reject) => {
        axios.post('', payload)
        .then(res => {

        })
        .catch(err => {

        })
      })
    },
    updateJobseeker: ({commit}, payload) => {

      commit('setJobseekerLoadingState', true);

      return new Promise((resolve, reject) => {
        axios.post('', payload)
          .then(res => {
            setTimeout(() => {
              resolve(res);
              commit('setJobseekerLoadingState', false)
            }, 1000);
          })
          .catch(err => {
            setTimeout(() => {
              reject(err);
              commit('setJobseekerLoadingState', false)
            }, 1000);
          })
      })
    }
  }
}
