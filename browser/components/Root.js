import React, { PropTypes } from 'react'

const electron = require('electron')
const remote = electron.remote
const dialog = remote.dialog

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    let targetDir = localStorage.getItem('target-dir')
    this.state = {
      targetDir: targetDir
    }
  }

  handleLoadRepositoryButtonClick (e) {
    let targetDir = dialog.showOpenDialog({properties: [ 'openDirectory' ]})
    this.setState({
      targetDir
    })
  }

  render () {
    console.log(this.state)
    return (
      <div className='Root'>
        <div className='StatusBar'>
          Target dir :  {this.state.targetDir}<button onClick={e => this.handleLoadRepositoryButtonClick(e)}>Load directory</button>
        </div>
      </div>
    )
  }
}
