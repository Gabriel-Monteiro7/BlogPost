import React, {useState, useEffect} from 'react';

import {
  Container,
  Content,
  ButtonCancel,
  ButtonDefault,
  TextButton,
  Title,
  ContainerOpacity,
  ContainerButton,
  TextButtonCancel,
} from './styles';
import {useDispatch} from 'react-redux';

import Form from '~/components/Form';
interface IModal {
  visible: boolean;
  setModal: any;
  deletePost: boolean;
}
import {deleteRequest} from '~/store/modules/post/actions';
const Input: React.FC<IModal> = ({visible, setModal, deletePost}: any) => {
  const [endModal, setEndModal] = useState(false);
  useEffect(() => {
    if (endModal) {
      setTimeout(() => {
        setModal(false);
        setEndModal(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endModal]);
  const dispatch = useDispatch();

  return (
    <Container visible={visible} animationType="fade" transparent={true}>
      <ContainerOpacity>
        {endModal ? (
          <Content>
            <Title>{`Post ${
              deletePost ? 'removido' : 'adicionado'
            } com sucesso!`}</Title>
          </Content>
        ) : (
          <Content>
            {deletePost ? (
              <>
                <Title>{'Deseja mesmo remover este post?'}</Title>

                <ContainerButton>
                  <ButtonCancel
                    onPress={() => {
                      setModal(false);
                    }}>
                    <TextButtonCancel>Cancelar</TextButtonCancel>
                  </ButtonCancel>
                  <ButtonDefault
                    onPress={() => {
                      setEndModal(true);
                      dispatch(deleteRequest(deletePost));
                    }}>
                    <TextButton>Remover</TextButton>
                  </ButtonDefault>
                </ContainerButton>
              </>
            ) : (
              <Form setEndModal={setEndModal}>
                <ButtonCancel
                  onPress={() => {
                    setModal(false);
                  }}>
                  <TextButtonCancel>Cancelar</TextButtonCancel>
                </ButtonCancel>
              </Form>
            )}
          </Content>
        )}
      </ContainerOpacity>
    </Container>
  );
};

export default Input;
