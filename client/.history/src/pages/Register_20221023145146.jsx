import React from 'react';
import { Form } from 'react-router-dom';

export default function Register() {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input label="Enter Email" type="email" />
        <Form.Input label="Enter Password" type="password" />
      </Form.Group>
    </Form>
  );
}
