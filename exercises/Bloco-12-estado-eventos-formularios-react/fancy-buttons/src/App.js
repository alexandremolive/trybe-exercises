import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0,
      color: 'rgb(239, 239, 239)'

    }
  }
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }))
    let par = 1
    let newColor;

    par += this.state.numeroDeCliques
    if (par % 2 === 0 && par !== 0) {
      newColor = 'green'
    } else {
      newColor = 'rgb(239, 239, 239)'
    }
    this.setState({ color: newColor })
  }
  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      </div>)
  }
}
export default App;
