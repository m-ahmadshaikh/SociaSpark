import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      username
      likeCount
    }
  }
`;

export default function LikeButton({
  post: { username, id, likes, likeCount },
  user,
}) {
  const [likedPost, setLikedPost] = useState(false);
  const [likePost, { data, loading, error }] = useMutation(LIKE_POST);

  useEffect(() => {
    if (user && likes.find((like) => like.username === 'ahm')) {
      setLikedPost(true);
    }
  }, [user, likes]);

  return (
    <Button style={{ marginRight: 5 }} as="div" labelPosition="right">
      {likedPost ? (
        <Button color="teal">
          <Icon name="heart" />
        </Button>
      ) : (
        <Button basic color="teal">
          <Icon name="heart" />
        </Button>
      )}
      <Label basic color="teal" pointing="left">
        {`${likeCount}`}
      </Label>
    </Button>
  );
}
