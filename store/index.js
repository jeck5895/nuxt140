import Vuex from 'vuex'
import Styling from './modules/styling'
import JobCategories from './modules/jobCategories'
import Locations from './modules/locations'

const createStore = () => {
    return new Vuex.Store({
        modules: {
          Styling,
          JobCategories,
          Locations
        }
    })
}

export default createStore
