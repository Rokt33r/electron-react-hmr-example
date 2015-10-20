import React from 'react'
import ReactDOM from 'react-dom'

var contentEl = document.getElementById('content')

class MainApp extends React.Component {
  render () {
    return (
      <div className='MainApp'>
        Edit me!
      </div>
    )
  }
}

ReactDOM.render(<MainApp/>, contentEl)
