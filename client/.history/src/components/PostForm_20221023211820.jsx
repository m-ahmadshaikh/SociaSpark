import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormField, FormInput } from 'semantic-ui-react';
import useForm from '../hooks/useForm';

const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      username
      createdAt
      comments {
        body
        id
        username
        createdAt
      }
      likes {
        id
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;

export default function PostForm() {
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);
  const { onSubmit, changeHandler, values } = useForm({ body: '' }, () => {
    createPost({ variables: { body: values.body } });
  });
  return (
    <div>
      <Form onSubmit={onSubmit} className={loading ? 'loading' : ''}>
        <h2>Create Post</h2>
        <FormField>
          <FormInput
            value={values.body}
            placeholder="body"
            name="body"
            onChange={changeHandler}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </FormField>
      </Form>
      {error && (
        <div className="ui error message">
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
}
