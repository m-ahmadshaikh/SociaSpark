import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  return <div className="">{data && JSON.stringify(data, null, 2)}</div>;
}
