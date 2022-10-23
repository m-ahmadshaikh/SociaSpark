import { gql, useQuery } from '@apollo/client';
import React from 'react';
import MenuBar from '../components/MenuBar';

const fetchQuery = gql`
  query ExampleQuery {
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
  return <div>Home</div>;
}
