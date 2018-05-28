import Vuex from 'vuex'
import Styling from './modules/styling'
import JobCategories from './modules/jobCategories'
import Locations from './modules/locations'
import Industries from './modules/Industries'

const createStore = () => {
    return new Vuex.Store({
        modules: {
          Styling,
          JobCategories,
          Locations,
          Industries
        }
    })
}

export default createStore
