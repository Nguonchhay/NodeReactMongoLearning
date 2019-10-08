import React, { useState } from 'react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap';
import Navigation from './../Navigation';

const Header = () => {
    const [isOpen, toggle] = useState(false);

    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Learning</NavbarBrand>
          <NavbarToggler onClick={() => toggle(!isOpen)} />
          
          <Navigation isOpen={isOpen} />
        </Navbar>
        
    );
}

export default Header;