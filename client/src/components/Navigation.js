import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    Collapse,
    Nav,
    NavItem,
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
                        <NavLink to={nav.slug} className="nav-link" activeClassName="active">{nav.title}</NavLink>
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
                                        <NavLink to={item.slug} activeClassName="active" className="nav-link">{item.title}</NavLink>
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
            <Nav className="ml-auto nav-main" navbar>
                {renderNavigation()}
            </Nav>
        </Collapse>
    );
}

export default Navigation;