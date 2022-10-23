import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

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

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
};
export default function Register() {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER, {});
  const [errors, setErrors] = useState({});
  const {
    onSubmit: submitHandler,
    values,
    changeHandler,
  } = useForm(initialState, () => {
    register({ variables: { input: values } });
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      console.log(data);
      setErrors({});
      navigate('/', { replace: true });
    }
    if (error) {
      setErrors(error.graphQLErrors[0].extensions);
    }
  }, [data, error]);

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
          <ul className="list">{getFormErrors(errors)}</ul>
        </div>
      )}
    </div>
  );
}

function getFormErrors(errors) {
  return Object.keys(errors.errors).map((key) => (
    <li key={key}>{JSON.stringify(errors.errors[key])}</li>
  ));
}
