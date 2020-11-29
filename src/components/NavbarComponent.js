import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  // const state = {
  //   logout: localStorage.removeItem("token"),
  //  };


  return (
    <div>
      <Navbar color="black" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Analitik">Analitik</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Data">Data</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  <FontAwesomeIcon icon={faUser} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/Profil">Profil</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>About</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/Logout">Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
