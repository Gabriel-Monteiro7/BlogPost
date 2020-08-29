import React from 'react';

import {Container} from './styles';
interface InterfaceInput {
  placeholder?: string;
  multiline?: boolean;
  onChangeText?: any;
  onBlur?: any;
  error?: boolean;
  onSubmitEditing?: any;
}
const Input: React.FC<InterfaceInput> = ({multiline, error, ...rest}: any) => {
  return (
    <Container
      multiline={multiline}
      textAlignVertical={multiline ? 'top' : 'center'}
      error={error}
      {...rest}
    />
  );
};

export default Input;
