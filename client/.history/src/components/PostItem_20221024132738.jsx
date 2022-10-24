import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GridColumn, GridRow, Image } from 'semantic-ui-react';

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
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId: params.postId },
  });

  if (loading) {
    return <p>Loading... </p>;
  }
  const {
    id: postId,
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
      </GridRow>
    </div>
  );
}
