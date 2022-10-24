import { gql, useApolloClient, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Confirm, Icon } from 'semantic-ui-react';
import { GET_POSTS } from '../pages/Home';

export default function DeleteButton({ postId }) {
  const [deletePost, { data, error, loading }] = useMutation(DELETE_POST);
  const [confirm, setConfirm] = useState(false);
  const client = useApolloClient();
  const navigate = useNavigate();
  function deleteHandler() {
    setConfirm(false);
    deletePost({ variables: { deletePostId: postId } });
    navigate('/', { replace: true });
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      // let { getPosts: posts } = client.readQuery(GET_POSTS);
      // posts = posts.filter((p) => p.id != postId);
      // client.writeQuery({ query: GET_POSTS, data: posts });
    }
  }, [data]);
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
