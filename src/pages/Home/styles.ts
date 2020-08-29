import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '~/components/Input';
export const Container = styled.View`
  justify-content: space-between;
  flex: 1;
  background: #f39c12;
  padding: 30px;
`;
export const ContainerList = styled(FlatList)`
  flex: 1;
`;
export const Card = styled.View``;
export const ContainerSearch = styled.View`
  position: relative;
`;
export const SearchPost = styled(Input).attrs({})``;
export const IconSearch = styled(Icon).attrs({name: 'search'})`
  color: #afb3b0;
  font-size: 25px;
  position: absolute;
  right: 8px;
  top: 10px;
`;

export const NoProducts = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: auto;
  color: #c3c3c3d9;
`;

export const ContainerButtonAdd = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  background: #ffffff;
  border-radius: 50px;
  border: 2px solid #afb3b0;
  position: absolute;
  bottom: 30px;
  right: 30px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
export const IconAdd = styled(Icon).attrs({name: 'add'})`
  color: #afb3b0;
  font-size: 30px;
`;
