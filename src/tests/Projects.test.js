import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { /*mountWithIntl,*/ shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import Projects from '../js/containers/Projects/Projects.jsx';
import ProjectsHeader from '../js/containers/ProjectsHeader/ProjectsHeader.jsx';
import ProjectDetail from '../js/containers/ProjectDetail/ProjectDetail.jsx';
import CreateProject from '../js/containers/CreateProject/CreateProject.jsx';
import ProjectCard from '../js/components/ProjectCard/ProjectCard.jsx';
import store from '../store';
import { setI18n } from '../js/actions/i18n';
import literals from '../i18n/en.json';
// import chaiEnzyme from 'chai-enzyme';
import projectsData from './data/projects';

Enzyme.configure({ adapter: new Adapter() });
loadTranslation('src/i18n/en.json');

describe('<Projects />', () => {
  let component = null;
  /*it('It has property literals type Object', () => {
    expect(component.props()).to.have.property('literals').to.be.a('object');
  });*/
  it('setI18n from intl (needs improve)', () => {
    store.dispatch(setI18n('en', literals));
    expect(store.getState().i18n.literals).to.have.property('projects');
  });
  it('renders 1 <Projects /> component', () => {
    component = shallowWithIntl(<Projects store={store} />);
    expect(component).to.have.length(1);
  });
  it('It has property store', () => {
    expect(component.props()).to.have.property('store');
  });
  it('It has property filters type object', () => {
    expect(component.props().filters).to.have.property('project');
    expect(component.props().filters).to.have.property('customer');
    expect(component.props().filters).to.have.property('status');
  });
  it('It has property projectList type array', () => {
    expect(component.props()).to.have.property('projectList').to.be.a('array');
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
  it('Render <ProjectsHeader /> inside <Projects />', () => {
    expect(component.dive().find(ProjectsHeader)).to.have.length(1);
  });
  it('Render <ProjectDetaiil /> inside <Projects />', () => {
    expect(component.dive().find(ProjectDetail)).to.have.length(1);
  });
  it('Render <ProjectCard /> inside <Projects />', () => {
    expect(component.dive().find(ProjectCard)).to.have.length(projectsData.length);
  });
});

describe('<ProjectsHeader />', () => {
  let component = null;
  it('renders 1 <ProjectsHeader /> component', () => {
    component = shallowWithIntl(<ProjectsHeader store={store} />);
    expect(component).to.have.length(1);
  });
});

describe('<ProjectDetail />', () => {
  let component = null;
  it('renders 1 <ProjectDetail /> component', () => {
    component = shallowWithIntl(<ProjectDetail store={store} />);
    expect(component).to.have.length(1);
  });
});

describe('<CreateProject />', () => {
  let component = null;
  it('renders 1 <CreateProjects /> component', () => {
    component = shallowWithIntl(<CreateProject store={store} />);
    expect(component).to.have.length(1);
    // Component state
    //expect(wrapper.state('foo')).to.equal('bar');
  });
});
