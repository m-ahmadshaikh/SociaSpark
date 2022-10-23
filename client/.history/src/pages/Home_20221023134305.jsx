import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      body
      username
      createdAt
      commentCount
      comments {
        id
        createdAt
        username
        body
      }
      likes {
        username
      }
      likeCount
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  console.log(data);
  if (error) return `Error! ${error.message}`;
  return <Grid.Column key={i}></Grid.Column>;
}
