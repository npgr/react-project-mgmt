import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { fetchCredentials } from '../actions/user';
import { toggleCreateProject } from '../actions/projects';

class AppNavigation extends Component {
  //<Link to="/">Home</Link>
  render() {
    const {
      literals,
      user: { userName },
      toggleCreateProject
    } = this.props;
    return (
      <Navbar
        className="navbar-dark navbar-expand-sm navbar-text-color"
        color="dark"
        xfixed="top"
      >
        <NavbarBrand href="#">AppManager</NavbarBrand>
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {literals.projects}
            </DropdownToggle>
            <DropdownMenu right={false}>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/components/">Component</NavLink>
          </NavItem>
          <UncontrolledDropdown>
            <DropdownToggle color="primary" caret>
              {literals.create}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={toggleCreateProject}>
                {literals.project}
              </DropdownItem>
              <DropdownItem>{literals.task}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavLink className="navbar-text-color link" href="#/about-us">{userName}</NavLink>
        </Nav>
      </Navbar>
    );
  }
}

AppNavigation.propTypes = {
  literals: PropTypes.shape({
    project: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    tasks: PropTypes.string.isRequired,
    create: PropTypes.string.isRequired
  }),
  user: PropTypes.shape({
    userName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  toggleCreateProject: PropTypes.func.isRequired
};

const mapStateToProps = ({
  i18n: {
    literals: {
      navigation: literals
    }
  },
  user
}) => ({
  literals,
  user
});

const mapDispatchToProps = {
  fetchCredentials,
  toggleCreateProject
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
