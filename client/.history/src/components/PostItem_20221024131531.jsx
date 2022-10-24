import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

const GET_POST = gql``;
export default function PostItem() {
  const params = useParams();
  const [getPost, { loading, error, data }] = useMutation();
  return <div>{params.postId}</div>;
}
