import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';
//import Home from './Home';
import Projects from './Projects';
import {
  testAction
} from '../actions/test';
import {
  setI18n
} from '../actions/i18n';

const About = () => (
  <Fragment>
    About Component
  </Fragment>
);

const notFoundPage = () => (
  <div>
    Not Found Page
  </div>
);

class App extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      prueba :'Exito'
    };
    const {
      testAction,
      mensaje
    } = this.props;
    // if (mensaje === "")
    testAction();
  }*/

  componentDidMount() {
    const {
      intl: {
        locale,
        messages: literals
      },
      setI18n
    } = this.props;
    this.props.testAction();
    console.log('language: ', locale);
    // console.log("ENV =", process.env)
    setI18n(locale, literals);
  }

  render() {
    const {
      intl: { messages: i18n }
    } = this.props;
    return (
      <div>
        {i18n['app.title']}
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/about-us" component={About} />
            <Route component={notFoundPage} />
            {/* <Redirect to="/404" /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = {
  testAction,
  setI18n
};

export default injectIntl(withRouter(connect(null, mapDispatchToProps)(App)));
