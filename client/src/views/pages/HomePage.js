import React from 'react';
import { Row, Col } from 'reactstrap';

import DefaultLayout from './../layouts/DefaultLayout';

const HomePage = () => {
    return (
        <DefaultLayout>
            <Row>
                <Col md="12">
                    <h3>Weclome homepage</h3>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default HomePage;