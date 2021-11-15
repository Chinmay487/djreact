import { createStore,applyMiddleware,compose} from "redux";
import reducer from './store/reducer/index'
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';


// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose(); 
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    // composeWithDevTools(applyMiddleware(thunk)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhances(applyMiddleware(thunk)),
    // applyMiddleware(thunk),
)


export default store;