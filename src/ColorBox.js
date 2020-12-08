import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let op = this.props.opacity
    return (
      <div className="color-box" style={{opacity: op /*replace null with the value*/}}>
        {op >= 0.2 ? (
          <ColorBox opacity ={op - 0.1}/>
        ): null}
      </div>
    )
  }

}

