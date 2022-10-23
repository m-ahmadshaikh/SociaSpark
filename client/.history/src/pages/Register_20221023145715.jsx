import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export default function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input label="Enter Email" type="email" value={values.email} />
        <Form.Input label="Enter Username" value={values.username} />
        <Form.Input
          label="Enter Password"
          type="password"
          value={values.password}
        />
        <Form.Input
          label="Confirm Password"
          type="password"
          value={values.confirmPassword}
        />
      </Form.Group>
    </Form>
  );
}
