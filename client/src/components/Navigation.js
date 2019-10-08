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

import { navigations } from './../constants';

const Navigation = (props) => {
    
    const renderNavigation = () => {
        return navigations.map(nav => {
            if (nav.children === undefined) {
                return (
                    <NavItem key={nav.slug}>
                        <NavLink href={nav.slug}>{nav.title}</NavLink>
                    </NavItem>
                )
            }

            return (
                <UncontrolledDropdown nav inNavbar key={nav.slug}>
                    <DropdownToggle nav caret>
                        {nav.title}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            nav.children.map(item => {
                                return (
                                    <DropdownItem key={item.slug}>
                                        <NavLink href={item.slug}>{item.title}</NavLink>
                                    </DropdownItem>
                                )
                            })
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
        });
    }

    return (
        <Collapse isOpen={props.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                {renderNavigation()}
            </Nav>
        </Collapse>
    );
}

export default Navigation;