import styled from 'styled-components/native';

export const Container = styled.Modal``;
export const ContainerOpacity = styled.View`
  justify-content: center;
  align-items: center;
  background: #00000030;
  flex: 1;
`;
export const Content = styled.View`
  background: #ffffff;
  width: 84%;
  /* min-height: 300px; */
  padding: 20px;
  margin: auto;
  border-radius: 4px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 30px auto;
  width: 60%;
  font-size: 16px;
`;
export const TextButton = styled.Text`
  color: #ffffff;
`;
export const ButtonDefault = styled.TouchableOpacity<{default?: boolean}>`
  border: 1px solid #e78444;
  background: #e78444;
  height: 42px;
  min-width: ${(props) => (props.default ? '60' : '130')}px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const TextButtonCancel = styled.Text`
  color: #e78444;
`;
export const ButtonCancel = styled(ButtonDefault)`
  background: #ffffff;
  width: 130px;
`;
export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
