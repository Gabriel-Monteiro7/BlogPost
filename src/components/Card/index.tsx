import React from 'react';
import {Container, Title, Body, IconDelete, ContainerDelete} from './styles';
interface ICard {
  title: string;
  body: string;
  userId: string;
  onModal: any;
}
const Card: React.FC<ICard> = ({title, body, onModal, userId}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <ContainerDelete
        onPress={() => {
          onModal(userId);
        }}>
        <IconDelete />
      </ContainerDelete>
    </Container>
  );
};

export default Card;
