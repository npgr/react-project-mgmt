import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectsHeader from '../ProjectsHeader/ProjectsHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { setAppTitle } from '../../actions/configuration';
import {
  fetchProjects
} from '../../actions/projects';

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
      filters,
      projectList
    } = this.props;
    let filteredData = projectList.slice(0);
    if (filters.project) filteredData = filteredData.filter(project => project.id === filters.project.id);
    if (filters.customer) filteredData = filteredData.filter(project => project.customer.id === filters.customer.id);
    if (filters.status) filteredData = filteredData.filter(project => project.status === filters.status);
    return (
      <Fragment>
        <ProjectsHeader />
        <div className="projects-list">
          {
            filteredData.map((project, i) =>
              <ProjectCard
                key={i}
                literals={literals.card}
                id={project.id}
                name={project.name}
                status={project.status}
                customer={project.customer}
              />
            )
          }
        </div>
      </Fragment>
    );
  }
}

Projects.propTypes = {
  literals: PropTypes.object,
  filters: PropTypes.object,
  projectList: PropTypes.array,
  setAppTitle: PropTypes.func,
  fetchProjects: PropTypes.func
};

const mapStateToProps = ({
  i18n: {
    literals: { projects: literals }
  },
  projects: {
    header: { filters },
    list: { data: projectList }
  }
}) => ({
  literals,
  filters,
  projectList
});

const mapDispatchToProps = {
  setAppTitle,
  fetchProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
