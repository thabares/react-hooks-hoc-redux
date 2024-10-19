import React from 'react'
import { Provider } from 'react-redux'
import store from "./redux/store"
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import BooksContainer from './components/BooksContainer'
import UserContainer from './components/UserContainer'

export default function index() {
    return (
        <Provider store={store}>
            {/* <CakeContainer />
            <HooksCakeContainer />
            <IceCreamContainer />
            <BooksContainer /> */}
            <UserContainer />
        </Provider>
    )
}

// Actions, Action Containers