import { gql, useQuery } from '@apollo/client';
import React from 'react';
import MenuBar from '../components/MenuBar';

const fetchQuery = gql`
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
`;

export default function Home() {
  const {} = useQuery(fetchQuery);
  return <div>Home</div>;
}
