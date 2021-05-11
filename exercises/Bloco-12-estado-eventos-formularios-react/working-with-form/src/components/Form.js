import React, { Component } from 'react'

class Form extends Component {

  constructor() {
    super()
    this.handleContent = this.handleContent.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      check: false,
    }
  }
  handleContent({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='container' >
        <form className='form'>
          <h1>Form</h1>
          <input
            name="firstName"
            onChange={this.handleContent}
            value={this.state.firstName}
            type="text"
          />
          <input
            name="lastName"
            onChange={this.handleContent}
            value={this.state.lastName} type="text"
          />
          <input
            name="check"
            onChange={this.handleContent}
            value={this.state.check}
            type="checkbox" />
        </form>
      </div>
    )
  }
}

export default Form