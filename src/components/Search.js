import React, { Component } from 'react';

class Search extends Component {
	constructor(){
    super()
    this.state = {query: ""}
  }

  render() {
    return (
      <div className="Search">
      	<form className="form-group row" onSubmit={ this.props.handleSubmit } >
      		<input className="form-control col col-6 offset-3" type="text" onChange={ this.props.handleChange } />          
      	</form>
      </div>
    );
  }
}

export default Search;
