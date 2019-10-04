import React from 'react';
import { Row, Col } from 'reactstrap';

import DefaultLayout from '../layouts/DefaultLayout';

const AboutPage = () => {
    return (
        <DefaultLayout>
            <Row>
                <Col md="12">
                    <h3>Weclome aboutpage</h3>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default AboutPage;