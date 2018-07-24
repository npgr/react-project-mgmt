import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import '../../style/App.css';
import {
  fetchProjects
} from '../actions/projects';

class Projects extends Component {
  componentWillMount() {
    //if (mensaje === "") this.props.testAction();
    this.props.fetchProjects();
  }

  render() {
    const {
      projectList
    } = this.props;
    return (
      <Fragment>
        <div>Project List</div>
        {
          projectList.map((project, i) => <div key={i}>{project.name}</div>)
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  projects: {
    list: {
      data: projectList
    }
  }
}) => ({
  projectList
});

const mapDispatchToProps = {
  fetchProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
