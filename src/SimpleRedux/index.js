import React from 'react'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import ComponentA from './components/ComponentA'
import reducerFunction from './redux/reducerFunction'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducerFunction, composeWithDevTools(applyMiddleware(logger)))

export default function index() {
    return (
        <Provider store={store}>
            <ComponentA />
        </Provider>
    )
}
