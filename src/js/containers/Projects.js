import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import '../../style/App.css';
import { setAppTitle } from '../actions/configuration';
import {
  fetchProjects
} from '../actions/projects';

class Projects extends Component {
  componentWillMount() {
    this.props.fetchProjects();
    this.setTitle();
  }

  setTitle() {
    const {
      literals: {
        title = ''
      }
    } = this.props;
    this.props.setAppTitle(title);
  }

  render() {
    const {
      literals,
      projectList
    } = this.props;
    return (
      <Fragment>
        {
          projectList.map((project, i) => <div key={i}>{project.name}</div>)
        }
      </Fragment>
    );
  }
}

Projects.propTypes = {
  literals: PropTypes.object,
  projectList: PropTypes.array,
  setAppTitle: PropTypes.func,
  fetchProjects: PropTypes.func
};

const mapStateToProps = ({
  i18n: {
    literals: {
      projects: literals
    }
  },
  projects: {
    list: {
      data: projectList
    }
  }
}) => ({
  literals,
  projectList
});

const mapDispatchToProps = {
  setAppTitle,
  fetchProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
