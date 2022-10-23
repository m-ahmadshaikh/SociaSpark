import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterInput) {
    register(input: $input) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
export default function Register() {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(resule);
    },
  });
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
    register({ variables: { input: values } });
  };
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

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
        <Button primary type="submit">
          Register
        </Button>
      </Form.Group>
    </Form>
  );
}
