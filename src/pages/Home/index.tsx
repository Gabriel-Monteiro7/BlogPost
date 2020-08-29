import React, {useState} from 'react';

import {
  Container,
  SearchPost,
  NoProducts,
  ContainerList,
  ContainerSearch,
  IconSearch,
  ContainerButtonAdd,
  IconAdd,
} from './styles';
import Card from '~/components/Card';
import Modal from '~/components/Modal';
import {useSelector, useDispatch} from 'react-redux';
import {getRequest} from '~/store/modules/post/actions';
const Home: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [searchPost, setSearchPost] = useState('');
  let {posts} = useSelector((state: any) => state.post);
  const dispatch = useDispatch();

  function onModal(id: any) {
    setModal(true);
    setDeletePost(id);
  }
  return (
    <Container>
      <ContainerSearch>
        <SearchPost
          onSubmitEditing={() => dispatch(getRequest(searchPost))}
          placeholder={'Pesquise seu post'}
          onChangeText={setSearchPost}
        />
        <IconSearch />
      </ContainerSearch>
      <ContainerList
        data={posts}
        keyExtractor={(post, index) => '' + index}
        renderItem={({item, index}: any) => (
          <>
            {(searchPost === '' || item.title.indexOf(searchPost) === 0) && (
              <Card
                key={index}
                title={item.title}
                body={item.body}
                userId={item.id}
                onModal={(e: any) => onModal(e)}
              />
            )}
          </>
        )}
        ListEmptyComponent={() => (
          <NoProducts>Não existe produtos cadastrados</NoProducts>
        )}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        visible={modal}
        setModal={(e: any) => {
          setModal(e);
        }}
        deletePost={deletePost}
      />
      <ContainerButtonAdd
        onPress={() => {
          onModal(false);
        }}>
        <IconAdd />
      </ContainerButtonAdd>
    </Container>
  );
};

export default Home;
