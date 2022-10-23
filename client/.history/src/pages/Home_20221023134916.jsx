import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
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
  const {
    loading,
    error,
    data: { posts },
  } = useQuery(GET_POSTS);
  if (error) return `Error! ${error.message}`;
  return (
    <Grid columns={3}>
      <GridRow>
        <h1>Recent Posts</h1>
      </GridRow>
      <GridRow>
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <GridRow>
              <GridColumn>{post.username}</GridColumn>
              <GridColumn>{post.createdAt}</GridColumn>
              <GridColumn>{post.body}</GridColumn>
            </GridRow>
          ))
        )}
      </GridRow>
    </Grid>
  );
}
