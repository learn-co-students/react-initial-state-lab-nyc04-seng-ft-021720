// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {

    const timer = this.state.secondsLeft

    return (
      <div>
        {timer != 0 ? `${timer} seconds left before I go boom!` : "Boom!"}
      </div>
    )
  }
}

export default Bomb;