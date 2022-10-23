import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

export default function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });

  const changeHandler = ({ name, value }) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          label="Enter Email"
          type="email"
          onChange={changeHandler}
          value={values.email}
        />
        <Form.Input
          onChange={changeHandler}
          label="Enter Username"
          value={values.username}
        />
        <Form.Input
          onChange={changeHandler}
          label="Enter Password"
          type="password"
          value={values.password}
        />
        <Form.Input
          label="Confirm Password"
          type="password"
          onChange={changeHandler}
          value={values.confirmPassword}
        />
      </Form.Group>
    </Form>
  );
}
