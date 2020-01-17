// Code Keypad Component Here
import React from 'react';

class KeyPad extends React.Component {
  enterPassword = () => console.log('Entering password...')
  render() {
    // return more than one input
    // need event handler (KeyUp)
    return (
      <div>
        <input type="password" onKeyUp={this.enterPassword} />
      </div>
    )
  }
}
export default Keypad;
