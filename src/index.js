import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './Navigator'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import auth from './store/reducers/auth'
import user from './store/reducers/user'
import admin from './store/reducers/admin'
import article from './store/reducers/article'
import articles from './store/reducers/articles'

axios.defaults.baseURL = 'http://localhost:9999/api'
axios.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.getItem('x-auth-token')
  return config
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  auth, user, article, articles, admin
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)