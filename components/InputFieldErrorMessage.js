import React from 'react';
import { View, Text } from 'react-native';

const InputFieldErrorMessage = (props) => {
  const { error } = props;
  return (
    error ? <Text className='text-red-500 mt-1 ml-6'>{error}</Text> : null
  );

}

export default InputFieldErrorMessage;