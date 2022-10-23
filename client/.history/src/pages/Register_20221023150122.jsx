import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

export default function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group widths="equal">
        <Form.Input
          label="Enter Email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={values.email}
        />
        <Form.Input
          onChange={changeHandler}
          name="username"
          label="Enter Username"
          value={values.username}
        />
        <Form.Input
          onChange={changeHandler}
          label="Enter Password"
          name="password"
          type="password"
          value={values.password}
        />
        <Form.Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={changeHandler}
          value={values.confirmPassword}
        />
        <Button type="submit"> hehe</Button>
      </Form.Group>
    </Form>
  );
}