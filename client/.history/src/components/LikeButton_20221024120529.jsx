import React, { useEffect, useState } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

export default function LikeButton({
  post: { username, id, likes, likeCount },
  user,
}) {
  const [likedPost, setLikedPost] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLikedPost(true);
    }
  }, [user, likes]);

  if (likedPost) {
    return (
      <Button style={{ marginRight: 5 }} as="div" labelPosition="right">
        <Button color="teal">
          <Icon name="heart" />
        </Button>
        <Label color="teal" pointing="left">
          {`${likeCount}`}
        </Label>
      </Button>
    );
  }

  return (
    <Button style={{ marginRight: 5 }} as="div" labelPosition="right">
      <Button basic color="teal">
        <Icon name="heart" />
      </Button>
      <Label basic color="teal" pointing="left">
        {`${likeCount}`}
      </Label>
    </Button>
  );
}
