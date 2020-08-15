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
import ErrorPage from './pages/404/Page404'

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
        <Route path="/" exact component={HomePage} />
        <Route path="/articles" exact component={ArticlesPage} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path='/login'>
          {!isAuth ? <LoginPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/register'>
          {!isAuth ? <RegisterPage /> : <Redirect to='/' />}
        </Route>
        <Route path='/profile'>
          {isAuth ? <ProfilePage /> : <Redirect to='/login' />}
        </Route>
        <Route path='/logout'>
          {isAuth ? <LogoutPage /> : <Redirect to='/login' />}
        </Route>
        <Route path='/create-article'>
          {isAdmin ? <CreateArticlePage /> : <Redirect to='/' />}
        </Route>
        <Route to='*' component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default withRouter(Navigator)