import React from 'react';
import { Card } from 'semantic-ui-react';

export default function PostCard({ post }) {
  return (
    <Card
      href="#card-example-link-card"
      header={post.username}
      meta="Friend"
      description={post.body}
    />
  );
}
