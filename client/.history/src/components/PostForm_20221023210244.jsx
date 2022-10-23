import React from 'react';
import { Form, FormField, FormInput } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

export default function PostForm() {
  const { onSubmit, changeHandler, values } = useForm({ body: '' }, () => {});

  return (
    <Form onSubmit={onSubmit}>
      <h2>Create Post</h2>
      <FormField>
        <FormInput
          value={values.body}
          placeholder="body"
          name="body"
          onChange={changeHandler}
        />
      </FormField>
    </Form>
  );
}
