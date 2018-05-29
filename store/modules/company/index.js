export default {
  state: {
    company: {
      description: '<ul><li>Male / Female</li><li>Graduate of Internal Auditing / Accountancy or any related Business course</li><li>With at least minimum of 6 months experience on the same field but not necessary</li><li>With above average of communication skills in both oral and written English</li><li>Proficient in MS Office</li><li>Willing to be assigned in Pasig City and willing to do periodic travels to Batangas, Laguna, Cavite and Clark areas</li><li>Open to all fresh graduates&nbsp;</li></ul>'
    },
    companies: []
  },
  getters: {
    getCompany: state => {
      return state.company
    },
    getCompanies: state => {
      return state.companies;
    }
  },
  mutations: {

  },
  actions: {

  }
}
