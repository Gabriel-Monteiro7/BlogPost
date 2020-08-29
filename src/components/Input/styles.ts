import styled from 'styled-components/native';

export const Container = styled.TextInput<{error: boolean}>`
  min-height: ${(props) => (props.multiline ? '120' : '45')}px;
  padding: 0px 30px 0px 8px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #afb3b0;
  color: #afb3b0;
  margin-bottom: ${(props) => (props.error !== undefined ? '0' : '15')}px;
`;
