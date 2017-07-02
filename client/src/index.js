import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/pages/Home'
import News from './components/pages/News'
import Todos from './components/pages/Todos'
import Login from './components/pages/Login'
import Edit from './components/pages/Edit'
import Profile from './components/pages/Profile'

import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">

      <Route exact path="/scrapbook" component={Home}></Route>
      <Route exact path="/news" component={News}></Route>
      <Route exact path="/todos" component={Todos}></Route>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/scrapbook/edit/:id" component={Edit}></Route>
      <Route exact path="/profile/:id" component={Profile}></Route>


    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
