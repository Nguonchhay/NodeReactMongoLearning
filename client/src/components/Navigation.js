import React from 'react';

import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Navigation = (props) => {
    return (
        <Collapse isOpen={props.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/about">About Us</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Pages
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <NavLink href="/contact">Contact Us</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink href="/style-guide">Style Guide</NavLink>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    );
}

export default Navigation;