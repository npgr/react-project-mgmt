import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../js/containers/App.jsx';
import Enzyme, {/* shallow, mount, render */ } from 'enzyme';
import { /*mountWithIntl,*/ shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
// import chai, { expect } from 'chai';
// import chaiEnzyme from 'chai-enzyme';
// import ReactDOM from 'react-dom';
// import App from './App';

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/
Enzyme.configure({ adapter: new Adapter() });
loadTranslation('src/i18n/en.json');

describe('<App />', () => {
  const component = shallowWithIntl(<App name="app" />);
  it('renders 1 <App /> component', () => {
    // console.log(component);
    // console.log(component.props());
    expect(component).toHaveLength(1);
  });
  it('it renders props correctly', () => {
    // console.log(component.instance().props);
    expect(component.instance().props.name).toBe('app');
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
