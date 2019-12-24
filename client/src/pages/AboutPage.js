import React from 'react';
import { Row, Col } from 'reactstrap';

import withLayout from './../hoc/layout/withLayout';


const AboutPage = () => {
    return (
        <Row>
            <Col md="12">
                <h3>Weclome aboutpage</h3>
            </Col>
        </Row>
    )
}

export default withLayout(AboutPage);