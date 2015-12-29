require('./styles/main.styl')
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'

let mainElement = document.getElementById('main')

ReactDOM.render(<Root/>, mainElement, function () {
  console.log('done')
})
