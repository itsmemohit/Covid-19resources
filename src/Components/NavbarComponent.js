import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './NavbarComponent.css';
import logo from '../officer.png';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" fixed="top" className="NavbarCustom">
      <img height="40px" width="40px" src={logo} className="App-logo" alt="logo" />
        <NavbarBrand href="/" >&nbsp;&nbsp;Covid Resources</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto NavbarCustom" navbar>
            <NavItem>
              <NavLink href="/components/"></NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Volunteer
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Doctor Volunteer Form
                </DropdownItem>
                <DropdownItem>
                  Covid19 Service Form
                </DropdownItem>
                <DropdownItem>
                  Volunteer Registration
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;