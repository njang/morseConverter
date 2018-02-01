import React, { Component } from 'react';

class Results extends Component {
	constructor(){
    super()
    this.state = {
    	morse: 'dot dash'
  	}
  }

  render() {
    return (
      <div className="Results">
      	<h1>Results</h1>
      	<p>{this.state.morse}</p>
      </div>
    );
  }
}

export default Results;
