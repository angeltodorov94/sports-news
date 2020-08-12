import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navigator from './Navigator'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import auth from './store/reducers/auth'
import user from './store/reducers/user'
import article from './store/reducers/article'
import articles from './store/reducers/articles'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  auth, user, article, articles
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)