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
  console.log(errors);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      setErrors(error.graphQLErrors[0].extensions);
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
      <Form className={loading ? 'loading' : ''} onSubmit={submitHandler}>
        <Form.Input
          label="Enter Email"
          type="email"
          name="email"
          onChange={changeHandler}
          error={Boolean(errors.email || '')}
          value={values.email}
        />
        <Form.Input
          onChange={changeHandler}
          name="username"
          error={Boolean(errors.username)}
          label="Enter Username"
          value={values.username}
        />
        <Form.Input
          onChange={changeHandler}
          label="Enter Password"
          name="password"
          type="password"
          error={Boolean(errors.password)}
          value={values.password}
        />
        <Form.Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          error={Boolean(errors.confirmPassword)}
          onChange={changeHandler}
          value={values.confirmPassword}
        />
        <Button primary type="submit">
          Register
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">{getErrors(errors)}</ul>
        </div>
      )}
    </div>
  );
}

function getErrors(errors) {
  Object.keys(errors).map((key) =>
    ['username', 'email', 'password', 'confirmPassword'].includes(key) ? (
      <li key={key}>{JSON.stringify(errors[key])}</li>
    ) : (
      ''
    )
  );
}
