import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/img/logo.svg';
import '../../style/App.css';
/* import {
    testAction,
  } from '../actions/test';*/

class Home extends Component {
  
  /* componentWillMount() {
    const {
      mensaje,
      testAction
    } = this.props;
    if (mensaje === "") this.props.testAction();
  }*/

  render() {
    const {
      mensaje,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {mensaje}
          <br />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({
  customer: { mensaje }
}) => ({
  mensaje
});
 
/* const mapDispatchToProps = {
	testAction,
};*/


export default connect(mapStateToProps, null)(Home);
