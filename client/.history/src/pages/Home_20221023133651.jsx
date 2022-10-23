import { gql, useQuery } from '@apollo/client';
import React from 'react';
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
  useQuery(fetchQuery);
  return <div>Home</div>;
}
