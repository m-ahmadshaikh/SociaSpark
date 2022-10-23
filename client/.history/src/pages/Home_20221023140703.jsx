import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';
import PostCard from '../components/PostCard';

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
  if (error) return `Error! ${error.message}`;
  return (
    <Grid columns={3}>
      <GridRow>
        <span>Recent Posts</span>
      </GridRow>
      <GridRow>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.posts.map((post) => (
            <GridColumn key={post.id}>
              <PostCard post={post} />
            </GridColumn>
          ))
        )}
      </GridRow>
    </Grid>
  );
}
