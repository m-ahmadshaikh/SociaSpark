import React from 'react';
import { Form, FormField } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

export default function PostForm() {
  const { onSubmit } = useForm({ post: '' }, () => {});

  return (
    <Form onSubmit={onSubmit}>
      <h2>Create Post</h2>
      <FormField></FormField>
    </Form>
  );
}
