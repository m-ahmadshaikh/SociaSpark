import React from 'react';
import { Form, FormField, FormInput } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

export default function PostForm() {
  const { onSubmit, onChange, values } = useForm({ post: '' }, () => {});

  return (
    <Form onSubmit={onSubmit}>
      <h2>Create Post</h2>
      <FormField>
        <FormInput placeholder="post" name="body" onChange={onChange} />
      </FormField>
    </Form>
  );
}