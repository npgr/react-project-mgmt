import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AppNavigation from './AppNavigation';
import AppNotifications from './AppNotifications';
import Projects from './Projects/Projects';
import CreateProject from './CreateProject/CreateProject';
import { setI18n } from '../actions/i18n';
import { fetchCredentials } from '../actions/user';

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
  componentWillMount() {
    const {
      intl: {
        locale,
        messages: literals
      },
      fetchCredentials,
      setI18n
    } = this.props;
    console.log('language: ', locale);
    // console.log("ENV =", process.env)
    fetchCredentials();
    setI18n(locale, literals);
  }

  renderComponentWithTitle(component, props) {
    switch (component) {
      case 'Projects':
        return <Projects {...props} />;
      default:
        return <notFoundPage {...props} />;
    }
  }

  render() {
    return (
      <Fragment>
        <AppNavigation />
        <AppNotifications />
        <CreateProject />
        <main>
          <Switch>
            <Route exact path="/" render={props => this.renderComponentWithTitle('Projects', props)} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about-us" component={About} />
            <Route component={notFoundPage} />
            {/* <Redirect to="/404" /> */}
          </Switch>
        </main>
      </Fragment>
    );
  }
}

App.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
    messages: PropTypes.object
  }).isRequired,
  fetchCredentials: PropTypes.func.isRequired,
  setI18n: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchCredentials,
  setI18n
};

export default injectIntl(withRouter(connect(null, mapDispatchToProps)(App)));
