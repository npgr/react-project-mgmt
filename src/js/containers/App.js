import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom'
import { injectIntl } from 'react-intl';
import Home from './Home'
import {
  testAction,
} from '../actions/test';

const About = () => (
  <Fragment>
    About Component
  </Fragment>
)

class App extends Component {
  /* constructor(props) {
    super(props)
    const {
      testAction,
      mensaje
    } = this.props;
    // if (mensaje === "") 
    testAction();
  }*/

  componentDidMount() {
    this.props.testAction();
    console.log("language: ", this.props.intl.locale)
    // console.log("ENV =", process.env)
  }

  render() {
    const {
      intl: { messages: i18n }
    } = this.props
    return (
      <div>
        {i18n["app.title"]}
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
          </Switch>
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = {
	testAction,
};

export default injectIntl(withRouter(connect(null, mapDispatchToProps)(App)));
