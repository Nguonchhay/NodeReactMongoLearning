import React, { Fragment, useState } from 'react'

import {
    Navbar,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap'

import Navigation from './Navigation'
import LanguageMenu from './LanguageMenu'


const Header = () => {
    const [isOpen, toggle] = useState(false);

    return (
        <Fragment>
            <div>
                <LanguageMenu />
            </div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">React Learning</NavbarBrand>
            <NavbarToggler onClick={() => toggle(!isOpen)} />
            
            <Navigation isOpen={isOpen} />
            </Navbar>
        </Fragment>   
    )
}

export default Header