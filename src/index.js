// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import Router from "./Router"

import { Provider } from 'react-redux'
import store from './redux/store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  rootElement
)