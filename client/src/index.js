// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react'
import ReactDOM from 'react-dom'
//import Login from './components/pages/Login'
import Home from './components/pages/Home'
import News from './components/pages/News'

//import Journal from './components/pages/Journal'
import registerServiceWorker from './registerServiceWorker'
//import './general.css'
//import './modules.css'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">

      <Route exact path="/scrapbook" component={Home}></Route>
      <Route exact path="/news" component={News}></Route>

    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
