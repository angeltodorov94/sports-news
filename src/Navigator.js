import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom'

import HomePage from './pages/home-page/HomePage'
import LoginPage from './pages/login-page/LoginPage'
import RegisterPage from './pages/register-page/RegisterPage'
import LogoutPage from './pages/logout-page/LogoutPage'
import ProfilePage from './pages/profile-page/ProfilePage'
import ArticlePage from './pages/article-page/ArticlePage'
import ArticlesPage from './pages/articles-page/ArticlesPage'
import CreateArticlePage from './pages/create-article/CreateArticle'

import { checkAuthenticationStatus } from './store/actions/index'
import { useSelector, useDispatch } from 'react-redux'

const Navigator = () => {
  const isAdmin = useSelector(state => state.auth.isAdmin)
  const isAuth = useSelector(state => state.auth.token !== null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthenticationStatus())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        {/* Public Routes */}
        <Route path="/" exact component={HomePage} />
        <Route path="/browse" component={ArticlesPage} />
        <Route path="/articles/:id" component={ArticlePage} />
        {/* Guest Routes */}
        {!isAuth ? <Route path="/login" component={LoginPage} /> : null}
        {!isAuth ? <Route path="/register" component={RegisterPage} /> : null}
        {/* Logged In Users Routes */}
        {isAuth ? <Route path="/profile" component={ProfilePage} /> : null}
        {isAuth ? <Route path="/logout" component={LogoutPage} /> : null}
        {/* Admin Pages */}
        {isAdmin ? <Route path="/create-article" component={CreateArticlePage} /> : null}
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default withRouter(Navigator)