import React from 'react';

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
