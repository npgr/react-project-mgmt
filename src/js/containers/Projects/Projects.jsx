import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectsHeader from '../ProjectsHeader/ProjectsHeader';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { setAppTitle } from '../../actions/configuration';
import {
  fetchProjects,
  showProjectDetail
} from '../../actions/projects';

class Projects extends Component {

  componentWillMount() {
    if (!this.props.test) this.props.fetchProjects();
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
      literals: {
        card: cardLiterals
      },
      filters,
      projectList,
      showProjectDetail
    } = this.props;
    let filteredData = projectList.slice(0);
    if (filters.project) filteredData = filteredData.filter(project => project.id === filters.project.id);
    if (filters.customer) filteredData = filteredData.filter(project => project.customer.id === filters.customer.id);
    if (filters.status) filteredData = filteredData.filter(project => project.status === filters.status);
    return (
      <Fragment>
        <ProjectsHeader />
        <ProjectDetail />
        <div className="projects-list">
          {
            filteredData.map((project, i) =>
              <ProjectCard
                key={i}
                literals={cardLiterals}
                id={project.id}
                name={project.name}
                status={project.status}
                customer={project.customer}
                showProjectDetail={() => showProjectDetail(project)}
              />
            )
          }
        </div>
      </Fragment>
    );
  }
}

Projects.propTypes = {
  test: PropTypes.bool,
  literals: PropTypes.shape({
    title: PropTypes.string.isRequired,
    card: PropTypes.object.isRequired
  }).isRequired,
  filters: PropTypes.object.isRequired,
  projectList: PropTypes.array.isRequired,
  setAppTitle: PropTypes.func.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  showProjectDetail: PropTypes.func.isRequired
};

const mapStateToProps = ({
  i18n: {
    literals: {
      projects: literals
    }
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
  fetchProjects,
  showProjectDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
