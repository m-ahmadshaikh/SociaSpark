import { gql, useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GET_POST = gql`
  query getPost($postId: ID!) {
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
  const [getPost, { loading, error, data }] = useMutation(GET_POST);
  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost({ variables: { postId: params.postId } });
  }, []);
  return <div>{JSON.stringify(post, null, 2)}</div>;
}