import React from 'react';

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
