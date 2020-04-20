import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component{
  constructor(props){ //pass in props we want to use to constructor 
    super(props) //using super because we inherit from React.Component
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  displaySeconds = () => {
    return (
    <div>
      {this.state.secondsLeft} seconds left before I go boom!
    </div>
    )
  }


  render(){
    return (
      this.state.secondsLeft > 0 ? this.displaySeconds() : <div>Boom!</div>
    )
  }
}