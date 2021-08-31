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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Volunteer
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://forms.gle/jLBperRCcYqUBXsn8" target="_blank" rel="noopener noreferrer">
                  Doctor Volunteer Form
                </DropdownItem>
                <DropdownItem href="https://forms.gle/sEp6x24eYT9eUbtb9" target="_blank" rel="noopener noreferrer">
                  Covid19 Service Form
                </DropdownItem>
                <DropdownItem href="https://forms.gle/D6fzVbJww7qan4zu9" target="_blank" rel="noopener noreferrer">
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

export default React.memo(NavbarComponent);