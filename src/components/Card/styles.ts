import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
  background: #ffffff;
  padding: 10px 15px;
  border-radius: 4px;
  position: relative;
  min-height: 150px;
`;
export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
`;
export const Body = styled.Text`
  color: #666666;
  min-height: 40px;
  margin: 10px 0px;
`;
export const IconDelete = styled(Icon).attrs({name: 'delete-forever'})`
  font-size: 25px;
  color: #ff0000;
`;
export const ContainerDelete = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 12px;
`;
