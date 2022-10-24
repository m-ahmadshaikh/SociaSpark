import { gql, useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LikeButton from './LikeButton';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  GridColumn,
  GridRow,
  Image,
} from 'semantic-ui-react';
import { useAuth } from '../context/auth';

const GET_POST = gql`
  query post($postId: ID!) {
    getPost(postID: $postId) {
      id
      body
      username
      createdAt
      comments {
        id
        createdAt
        username
        body
      }
      likes {
        id
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;
export default function PostItem() {
  const params = useParams();
  const user = useAuth();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId: params.postId },
  });

  if (loading) {
    return <p>Loading... </p>;
  }
  const {
    id,
    body,
    username,
    createdAt,
    comments,
    likes,
    likeCount,
    commentCount,
  } = data.getPost;
  return (
    <div>
      <GridRow>
        <GridColumn width={2}>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
          />
        </GridColumn>
        <GridColumn width={10}>
          <Card>
            <CardContent>
              <CardHeader>{username}</CardHeader>
              <CardMeta>{moment(createdAt).fromNow()}</CardMeta>
              <CardDescription>{body}</CardDescription>
            </CardContent>
            <hr />
            <CardContent extra>
              <LikeButton user={user} post={{ id, username, likes }} />
            </CardContent>
          </Card>
        </GridColumn>
      </GridRow>
    </div>
  );
}
