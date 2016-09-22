import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Main from './lib/Main'
import Detail from './lib/Detail'
import Preview from './lib/Preview'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/Detail/:image/:name/:email/:phone/:location" component={Detail}/>
  </Router>
), document.getElementById('app'))
