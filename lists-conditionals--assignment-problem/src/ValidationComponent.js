import React, { Component } from 'react';

class ValidationComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="ValidationComponent">
          {this.props.inputValue < 5 ? "Text Too Short " : "Text Long Enough"}
      </div>
    );
  }
}

export default ValidationComponent;