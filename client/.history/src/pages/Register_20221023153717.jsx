import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
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
  const [register, { data, loading, error }] = useMutation(REGISTER_USER, {});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error.graphQLErrors[0].extensions.username);
    }
  }, [data, error]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    register({ variables: { input: values } });
  };

  return (
    <div className="form-container">
      <p>{JSON.stringify(errors, null, 2)}</p>
      <Form className={loading ? 'loading' : ''} onSubmit={submitHandler}>
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
      </Form>
    </div>
  );
}
