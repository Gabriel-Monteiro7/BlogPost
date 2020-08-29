import styled from 'styled-components/native';
import {Formik} from 'formik';

export const Container = styled(Formik)`
  flex: 1;
  justify-content: space-between;
`;
export const ContainerInputs = styled.View``;
export const ContainerInput = styled.View`
  margin-bottom: 15px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TextButton = styled.Text`
  color: #ffffff;
`;
export const ButtonDefault = styled.TouchableOpacity`
  border: 1px solid #e78444;
  background: #e78444;
  height: 42px;
  width: 130px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const Error = styled.Text<{hidden: boolean}>`
  color: ${(props) => (props.hidden !== undefined ? '#fe2e2e' : 'transparent')};
  font-size: 12px;
`;
