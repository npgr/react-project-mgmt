import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Select from 'react-select';
import Modal from '../../components/Modal/Modal';
//import style from './ProjectsHeader.css.js';
import { toggleCreateProject } from '../../actions/projects';

class CreateProject extends Component {
  render() {
    const {
      literals,
      showCreateProject,
      project,
      toggleCreateProject
    } = this.props;
    return (
      <Modal
        isOpen={showCreateProject}
        header="Create Project"
        //footer='Footer'
        closeButtonText={literals.close}
        toggle={toggleCreateProject}
      >
        <div>{`${literals.status}: ${project.status}`}</div>
        <div>{`${literals.customer}: ${project.customer.name}`}</div>
      </Modal>
    );
  }
}

CreateProject.propTypes = {
  literals: PropTypes.shape({
    customer: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired
  }).isRequired,
  showCreateProject: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }),
  toggleCreateProject: PropTypes.func.isRequired
};

const mapStateToProps = ({
  i18n: {
    literals: {
      projects: {
        detail: literals
      }
    }
  },
  projects: {
    header: {
      showCreateProject
    },
    detail: {
      showProjectDetail,
      ...project
    }
  }
}) => ({
  literals,
  showCreateProject,
  showProjectDetail,
  project
});

const mapDispatchToProps = {
  toggleCreateProject
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
