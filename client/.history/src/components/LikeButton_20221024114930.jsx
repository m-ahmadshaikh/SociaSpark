import React, { useEffect } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

export default function LikeButton({ post: { id, likes, likeCount } }) {
  const [likedPost, setLikedPost] = useState(false);

  useEffect(() => {}, []);

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
