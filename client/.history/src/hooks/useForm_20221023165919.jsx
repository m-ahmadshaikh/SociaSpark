import React from 'react';

export default function useForm(initialState, callback) {
  const [values, setValues] = useState(initialState);

  function onSubmit(e) {
    e.preventDefault();
    callback();
  }
  return { onSubmit, values, setValues };
}
