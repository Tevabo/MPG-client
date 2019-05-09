import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers/index'
import ReduxThunk from 'redux-thunk'


// Developers note, rewrote this part because the app did not work without the Redux extension.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
)
const store = createStore(reducer, enhancer)

export default store