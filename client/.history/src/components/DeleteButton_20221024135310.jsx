import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Button, Confirm, Icon } from 'semantic-ui-react';

export default function DeleteButton({ postId }) {
  const [deletePost, { data, error, loading }] = useMutation(DELETE_POST);
  const [confirm, setConfirm] = useState(false);
  function deleteHandler() {
    deletePost({ variables: { id: postId } });
  }
  return (
    <>
      <Button
        floated="right"
        as="div"
        color="red"
        onClick={() => setConfirm(true)}>
        <Icon name="trash" />
      </Button>
      <Confirm
        open={confirm}
        onCancel={() => setConfirm(false)}
        onConfirm={deleteHandler}
      />
    </>
  );
}

const DELETE_POST = gql`
  mutation deletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId)
  }
`;
