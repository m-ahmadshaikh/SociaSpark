import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';
import { useAuth } from '../context/auth';

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
  const { user } = useAuth();
  console.log(user.username === username);
  function likePost() {
    console.log('liking post');
  }
  function deleteHandler() {
    console.log('delete');
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
        <div className="ui ">
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
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button basic color="blue">
              <Icon name="comments" />
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              {`${commentCount}`}
            </Label>
          </Button>
          {user && user.username === username && (
            <Button as="div" color="red" onClick={deleteHandler}>
              <Icon name="trash" />
            </Button>
          )}
        </div>
      </Card.Content>
    </Card>
  );
}
