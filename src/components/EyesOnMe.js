// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  // render button
  // event listeners for focus and blur
  // focus => console.log('Good!')
  // blur => console.log(`Hey! Eyes on me!`)
  Focus = () => console.log(`Good!`);
  Blur = () => console.log(`Hey! Eyes on me!`)
  render() {
    return (<button Focus={this.Focus} Blur={this.Blur}>
      Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;