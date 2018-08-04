import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { /*mountWithIntl,*/ shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import Projects from '../js/containers/Projects/Projects.jsx';
import ProjectCard from '../js/components/ProjectCard/ProjectCard.jsx';
import store from '../store';
import { setAppTitle } from '../js/actions/configuration';
// import chaiEnzyme from 'chai-enzyme';
import projectsData from './data/projects';

Enzyme.configure({ adapter: new Adapter() });
loadTranslation('src/i18n/en.json');

describe('<Projects />', () => {
  let component = null;
  it('renders 1 <Projects /> component', () => {
    component = shallowWithIntl(<Projects store={store} />);
    expect(component).to.have.length(1);
  });
  it('It has property store', () => {
    expect(component.props()).to.have.property('store');
  });
  it('It has property literals type Object', () => {
    expect(component.props()).to.have.property('literals').to.be.a('object');
  });
  it('It has property filters type object', () => {
    expect(component.props()).to.have.property('filters').to.be.a('object');
  });
  it('It has property projectList type array', () => {
    expect(component.props()).to.have.property('projectList').to.be.a('array');
  });
  it('It dispatch action set title() ', () => {
    store.dispatch(setAppTitle('Mi Titulo2'));
    expect(store.getState().configuration.title).equals('Mi Titulo2');
  });
  it('FetchProjects() ', () => {
    //store.dispatch(fetchProjects());
    store.dispatch({
      type: 'FETCH_PROJECTS_FULFILLED',
      payload: projectsData
    });
    expect(store.getState().projects.list.data[1].id).equals(projectsData[1].id);
  });
  it('Value of prop projectList', () => {
    component = shallowWithIntl(<Projects test store={store} />);
    expect(component.props().projectList[1].id).equals(projectsData[1].id);
  });
  it('Render project Cards', () => {
    expect(component.dive().find(ProjectCard)).to.have.length(projectsData.length);
  });
});
