import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button'

class App extends Component {
  static propTypes = {
    showHeader: React.PropTypes.bool
  }
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    console.log(this.props)
    if ( this.props.showHeader ) {
      var header = (
          <span>
            Header here
          </span>
        )
    } else {
      header = null
    }

    if ( this.state.clicked ){
      var paragraphStyle = {
        color: 'green',
        fontSize: '70px'
      }
    } else {
      paragraphStyle = {
        color: 'red',
      }
    }
    var buttonText = (this.state.clicked) ? "Clicked!" : "Not Clicked" // ? shorthand for if/else
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{header}</h2>
        </div>
        <p className="App-intro" style={paragraphStyle}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </div>
    );
  }
}

export default App;