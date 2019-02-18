import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/action';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {click: 0};
    this.helloWord = this.helloWord.bind(this);
  }
  helloWold(){
    alert('Hello World')
  }
  render(){
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

function mapStateToProps (state){
  const {reducerHelloWorld} = state;
  return {reducerHelloWorld};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )(Home)
