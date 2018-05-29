export default {
  state: {
    step: {
      active_step: 1
    },
    steps: [
      {
        id: 1,
        label: 'Company Information'
      },
      {
        id: 2,
        label: 'Contact Person'
      },
      {
        id: 3,
        label: 'Login Credentials'
      }
    ]
  },
  getters: {
    getStep: state => {
      return state.step;
    },
    getSteps: state => {
      return state.steps;
    }
  },
  mutations: {
    setStep: (state, payload) => {
      state.step.active_step = payload;
    }
  },
  actions: {
    setStep: ({commit}, payload) => {
      commit('setStep', payload);
    }
  }
}
