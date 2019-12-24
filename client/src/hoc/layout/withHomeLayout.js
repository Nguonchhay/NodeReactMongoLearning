import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from './../../components/shared/Header';
import Footer from './../../components/shared/Footer';


const withHomeLayout = Page => {
    return (props) => (
        <Fragment>
            <Header />
            <Container>
                <Page />
            </Container>
            <Footer />
        </Fragment>
    )
}

export default withHomeLayout;