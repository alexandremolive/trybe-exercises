import React from 'react'

class AllButton extends React.Component {
  render() {
    const { handleAll } = this.props
    return (
      <button onClick={handleAll} value=''>All</button>
    )
  }
}
export default AllButton