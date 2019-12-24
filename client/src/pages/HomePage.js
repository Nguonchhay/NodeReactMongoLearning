import React from 'react';
import { Row, Col } from 'reactstrap';

import withHomeLayout from './../hoc/layout/withHomeLayout';


const HomePage = () => {
    return (
        <Row>
            <Col md="12">
                <h3>Weclome homepage</h3>
            </Col>
        </Row>
    )
}

export default withHomeLayout(HomePage);