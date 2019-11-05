import React from 'react';
import useForm from 'react-hook-form';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ContactForm = props => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="full_name">Full Name *</Label>
                <Input type="text" name="full_name" id="full_name" placeholder="First Name Last Name" innerRef={register({required: true})} />
                {errors.full_name && <span>This field is required</span>}
            </FormGroup>

            <FormGroup>
                <Label for="email">Email *</Label>
                <Input type="email" name="email" id="email" placeholder="Email Address" innerRef={register({required: true})} />
                {errors.email && <span>This field is required</span>}
            </FormGroup>

            <FormGroup>
                <Button>Submit</Button>
            </FormGroup>
        </Form>
    )
}

export default ContactForm;