import React from 'react';

export default function DeleteButton() {
  return (
    <Button floated="right" as="div" color="red" onClick={deleteHandler}>
      <Icon name="trash" />
    </Button>
  );
}
