import React from 'react'

class NextButton extends React.Component {
  render (){
    const {handleNextBtn} = this.props
    return (
      <button onClick={handleNextBtn}>NEXT</button>
    )
  }
}
export default NextButton