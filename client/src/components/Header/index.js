import React, { useState } from 'react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap';
import Navigation from './../Navigation';

const Header = () => {
    const [isOpen, toggle] = useState(false);

    const handleToggle = (isOpen) => {
        toggle(!isOpen);
    }

    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Learning</NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          
          <Navigation isOpen={isOpen} />
        </Navbar>
    );
}

export default Header;