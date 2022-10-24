import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default function DeleteButton({ postId }) {
  const [deletePost, { data, error, loading }] = useMutation(DELETE_POST);
  function deleteHandler() {
    deletePost({ variables: { id: postId } });
  }
  return (
    <Button floated="right" as="div" color="red" onClick={deleteHandler}>
      <Icon name="trash" />
    </Button>
  );
}

const DELETE_POST = gql`
  mutation deletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId)
  }
`;
