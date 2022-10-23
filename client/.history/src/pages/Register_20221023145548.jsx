import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export default function Register() {
  const [values, setValues] = useState({
    email: '',
    email: '',
    email: '',
    email: '',
    email: '',
  });
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input label="Enter Email" type="email" />
        <Form.Input label="Enter Password" type="password" />
      </Form.Group>
    </Form>
  );
}
