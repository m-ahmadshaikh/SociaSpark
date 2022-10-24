import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default function DeleteButton({ postId }) {
  console.log(postId);
  function deleteHandler() {
    console.log('delete');
  }
  return (
    <Button floated="right" as="div" color="red" onClick={deleteHandler}>
      <Icon name="trash" />
    </Button>
  );
}
