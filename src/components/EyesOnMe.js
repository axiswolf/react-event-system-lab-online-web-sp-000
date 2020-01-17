// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  // render button
  // event listeners for focus and blur
  // focus => console.log('Good!')
  // blur => console.log(`Hey! Eyes on me!`)
  onFocus = () => console.log(`Good!`);
  onBlur = () => console.log(`Hey! Eyes on me!`)
  render() {
    return (<button onFocus={this.onFocus} onBlur={this.onBlur}>
      Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;
