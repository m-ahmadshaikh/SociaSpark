import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

export default function LikeButton() {
  return (
    <Button
      style={{ marginRight: 5 }}
      as="div"
      labelPosition="right"
      onClick={likePost}>
      <Button basic color="teal">
        <Icon name="heart" />
      </Button>
      <Label as="a" basic color="teal" pointing="left">
        {`${likeCount}`}
      </Label>
    </Button>
  );
}
