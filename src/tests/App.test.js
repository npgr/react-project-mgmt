import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {/* shallow, mount, render */ } from 'enzyme';
import { expect } from 'chai';
import { /*mountWithIntl,*/ shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import App from '../js/containers/App.jsx';
import AppNavigation from '../js/containers/AppNavigation.jsx';
import AppNotifications from '../js/containers/AppNotifications.jsx';
//import CreateProject from '../js/containers/CreateProject/CreateProject.jsx';
import store from '../store';
// import chaiEnzyme from 'chai-enzyme';

Enzyme.configure({ adapter: new Adapter() });
loadTranslation('src/i18n/en.json');

describe('<App />', () => {
  const component = shallowWithIntl(<App />);
  it('renders 1 <App /> component', () => {
    expect(component).to.have.length(1);
  });
  it('it has a string property intl.locale equals en', () => {
    expect(component.props().intl).to.have.property('locale').to.be.a('string').equals('en');
  });
  it('it has a object property intl.messages', () => {
    expect(component.props().intl).to.have.property('messages').to.be.a('object');
  });
  // it('Render <AppNavigation /> inside <App />', () => {
  //   //console.log(component.dive());
  //   expect(component.dive().find(AppNavigation)).to.have.length(1);
  // });
  // it('Render <CreateProject /> inside <App />', () => {
  //   expect(component.dive().find(CreateProject)).to.have.length(1);
  // });
});

describe('<AppNavigation />', () => {
  let component = null;
  it('renders 1 <AppNavigation /> component', () => {
    component = shallowWithIntl(<AppNavigation store={store} />);
    expect(component).to.have.length(1);
  });
  /*it('It has a string property title = Mi Titulo', () => {
    store.dispatch(setAppTitle('Mi Titulo2'));
    component = shallowWithIntl(<AppNavigation store={store} />);
    expect(component.props()).to.have.property('title').to.be.a('string').equals('Mi Titulo2');
  });
  it('Render title = Mi Titulo2', () => {
    expect(component.dive().find('.app-title').render().text()).equals('Mi Titulo2');
  });*/
});

describe('<AppNotifications />', () => {
  let component = null;
  it('renders 1 <AppNotifications /> component', () => {
    component = shallowWithIntl(<AppNotifications store={store} />);
    expect(component).to.have.length(1);
  });
});

/* it('it Clicks Button', () => {
    const component = mount(<App />);
    const button = component.find('button');
    button.simulate('click');
    button.props().onClick();
    expect(component.state().counter).toEquals(2);
  });*/
// test Routes
// Home
// about
// notFound
