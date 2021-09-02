import {createStore, applyMiddleware} from  'redux'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer'
import { rootSaga } from './modules/rootSaga';

const sagaMiddeware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddeware)

const store = createStore(rootReducer, enhancer);

sagaMiddeware.run(rootSaga)



export default store;