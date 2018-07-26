import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import { fetchCredentials } from '../actions/user';

class AppHeader extends Component {
  render() {
    const {
      title,
      user: { userName }
    } = this.props;
    return (
      <Navbar
        className="navbar-dark navbar-expand-sm justify-content-between navbar-text-color"
        color="dark"
        xfixed="top"
      >
        <NavbarBrand href="#">AppManager</NavbarBrand>
        <Nav>
          <NavItem>{title}</NavItem>
        </Nav>
        <NavLink className="navbar-text-color link" href="#/about-us">{userName}</NavLink>
      </Navbar>
    );
    //<Link to="/">Home</Link>
  }
}

AppHeader.propTypes = {
  title: PropTypes.string,
  user: PropTypes.shape({
    userName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string)
  })
};

const mapStateToProps = ({
  user
}) => ({
  user
});

const mapDispatchToProps = {
  fetchCredentials
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
