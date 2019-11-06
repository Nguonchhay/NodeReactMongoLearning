import React from 'react';
import useForm from 'react-hook-form';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = props => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row form>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="last_name">First Name *</Label>
                            <Input type="text" name="last_name" id="first_name" placeholder="First Name" innerRef={register({required: true})} />
                            {errors.last_name && <span>This field is required</span>}
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="last_name">Last Name *</Label>
                            <Input type="text" name="last_name" id="last_name" placeholder="Last Name" innerRef={register({required: true})} />
                            {errors.last_name && <span>This field is required</span>}
                        </FormGroup>
                    </Col>
                </Row>
                

                <FormGroup>
                    <Label for="email">Email *</Label>
                    <Input type="email" name="email" id="email" placeholder="Email Address" innerRef={register({required: true})} />
                    {errors.email && <span>This field is required</span>}
                </FormGroup>

                <FormGroup>
                    <Label for="subject">Subject *</Label>
                    <Input type="text" name="subject" id="subject" placeholder="Subject" innerRef={register({required: true})} />
                    {errors.subject && <span>This field is required</span>}
                </FormGroup>

                <FormGroup>
                    <Label for="subject">Message *</Label>
                    <Input type="textarea" name="message" id="message" placeholder="Message" innerRef={register({required: true})} />
                    {errors.message && <span>This field is required</span>}
                </FormGroup>

                <FormGroup>
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default ContactForm;