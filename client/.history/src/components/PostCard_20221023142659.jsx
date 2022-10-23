import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';

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
  function commentOnPost() {
    console.log('commenting');
  }
  function likePost() {
    console.log('liking post');
  }
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
        <div className="ui two buttons">
          <Button as="div" labelPosition="right" onClick={likePost}>
            <Button basic color="teal">
              <Icon name="heart" />
            </Button>
            <Label as="a" basic color="teal" pointing="left">
              {`${likeCount}`}
            </Label>
          </Button>
          <Button as="div" labelPosition="right" onClick={commentOnPost}>
            <Button basic color="blue">
              <Icon name="vagina" />
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              {`${commentCount}`}
            </Label>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
