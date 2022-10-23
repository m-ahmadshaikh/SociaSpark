import React from 'react';
import { Form } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

export default function PostForm() {
  const { onSubmit } = useForm({ post: '' }, () => {});

  return <Form></Form>;
}
