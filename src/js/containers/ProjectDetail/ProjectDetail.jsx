import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Select from 'react-select';
import Modal from '../../components/Modal/Modal';
//import style from './ProjectsHeader.css.js';
import { toggleProjectDetail } from '../../actions/projects';

class ProjectDetail extends Component {
  render() {
    const {
      literals,
      showProjectDetail,
      project,
      toggleProjectDetail
    } = this.props;
    return (
      <Modal
        isOpen={showProjectDetail}
        header={project.name}
        //footer='Footer'
        closeButtonText={literals.close}
        toggle={toggleProjectDetail}
      >
        <div>{`${literals.status}: ${project.status}`}</div>
        <div>{`${literals.customer}: ${project.customer.name}`}</div>
      </Modal>
    );
  }
}

ProjectDetail.propTypes = {
  literals: PropTypes.shape({
    customer: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired
  }).isRequired,
  showProjectDetail: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }),
  toggleProjectDetail: PropTypes.func.isRequired
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
    detail: {
      showProjectDetail,
      ...project
    }
  }
}) => ({
  literals,
  showProjectDetail,
  project
});

const mapDispatchToProps = {
  toggleProjectDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
