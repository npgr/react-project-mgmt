import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Col, Label, Input } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Select from 'react-select';
import style from './ProjectsHeader.css.js';
import {
  setProjectsFilter
} from '../../actions/projects';

class ProjectsHeader extends Component {
  render() {
    const {
      literals,
      projectsList,
      setProjectsFilter
    } = this.props;
    const projectNameOptions = projectsList.reduce((acc, cur) => {
      if (cur.id && cur.name) return [...acc, {id: cur.id, name: cur.name}];
      return acc;
    }, []);
    const customerOptions = projectsList.reduce((acc, cur) => {
      if (cur.customer && cur.customer.id && cur.customer.name) {
        return [...acc, {value: cur.customer.id, label: cur.customer.name}];
      }
      return acc;
    }, []);
    const statusOptions = [
      { value: 'a', label: 'active' },
      { value: 'i', label: 'inactive' }
    ];
    return (
      <div style={style.projectHeader}>
        <div style={style.selectCustomer}>
          <Typeahead
            placeholder={literals.projectName}
            labelKey={option => `${option.name} (${option.id})`}
            minLength={2}
            clearButton
            multiple={false}
            options={projectNameOptions}
            onChange={val => setProjectsFilter('project', val[0])}
          />
        </div>
        <div style={style.selectCustomer}>
          <Select
            placeholder={literals.selectCustomer}
            isClearable
            onChange={val => setProjectsFilter('customer', val ? {id: val.value, name: val.label} : null)}
            options={customerOptions}
          />
        </div>
        <div style={style.selectStatus}>
          <Select
            placeholder={literals.selectStatus}
            isClearable
            onChange={val => setProjectsFilter('status', val ? val.label : null)}
            options={statusOptions}
          />
        </div>
      </div>
    );
  }
}

ProjectsHeader.propTypes = {
  literals: PropTypes.object,
  projectsList: PropTypes.array,
  setProjectsFilter: PropTypes.func
};

const mapStateToProps = ({
  i18n: {
    literals: {
      projects: {
        header: literals
      }
    }
  },
  projects: {
    header,
    list: { data: projectsList }
  }
}) => ({
  literals,
  header,
  projectsList
});

const mapDispatchToProps = {
  setProjectsFilter
};
//const ComponentWithCSS = cssModules(ProjectsHeader, style);
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsHeader);
//export default cssModules(DropZone, style, { allowMultiple: true });
