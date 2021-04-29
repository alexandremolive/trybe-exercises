import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0

    }
  }
  handleClick(event) {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }))
    let par = 1
    par += this.state.numeroDeCliques
    if (par % 2 === 0 && par !== 0) {
      event.target.style.backgroundColor = 'green'
    } else {
      event.target.style.backgroundColor = 'rgb(239, 239, 239)'
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      </div>)
  }
}
export default App;
