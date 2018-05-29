import Vuex from 'vuex'
import Styling from './modules/styling'
import JobCategories from './modules/jobCategories'
import Locations from './modules/locations'
import Industries from './modules/Industries'
import Stepper from './modules/stepper'
import Company from './modules/company/index'
import Jobseeker from './modules/jobseeker/index'

const createStore = () => {
    return new Vuex.Store({
        modules: {
          Styling,
          JobCategories,
          Locations,
          Industries,
          Stepper,
          Company,
          Jobseeker
        }
    })
}

export default createStore
