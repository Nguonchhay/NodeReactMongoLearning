import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

class DefaultLayout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    {this.props.children}
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default DefaultLayout;