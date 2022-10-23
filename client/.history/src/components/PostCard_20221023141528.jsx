import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

export default function PostCard({
  post: {
    id,
    username,
    body,
    createdAt,
    commentCount,
    comments,
    likes,
    likeCount,
  },
}) {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta to={`posts/${id}`} as={Link}>
          {moment(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          color="teal"
          icon="heart"
          label={{
            basic: true,
            color: 'teal',
            pointing: 'left',
            content: `${likeCount}`,,
          }}
        />
        <Button
          basic
          color="teal"
          label={{
            as: 'a',
            basic: true,
            color: 'blue',
            pointing: 'left',
            content: `${likeCount}`,
          }}
        />
      </Card.Content>
    </Card>
  );
}
