import React from 'react';
import { Row, Col } from 'reactstrap';

import withLayout from './../hoc/layout/withLayout';
import ContactForm from './../components/forms/ContactForm';


const ContactUsPage = () => {
    return (
        <Row>
            <Col md="12">
                <h2>Weclome ContactUsPage</h2>
            </Col>

            <Col sm="4">
                <h3>Weclome to our Page</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </Col>
            <Col sm="8">
                <ContactForm />
            </Col>
        </Row>
    )
}

export default withLayout(ContactUsPage);