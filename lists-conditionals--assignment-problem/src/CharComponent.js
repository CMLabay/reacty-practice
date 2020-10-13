import React, { Component } from 'react';
import './CharComponent.css'

class ValidationComponent extends Component {
  constructor(props){
    super(props);

  }

  sendItem = () => {
    this.props.onClick(this.props.index)
  }

  render() {
    return (
      <div className="CharComponent" onClick={this.sendItem}>
          {this.props.character}
      </div>
    );
  }
}

export default ValidationComponent;