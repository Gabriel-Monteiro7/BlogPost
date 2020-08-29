import {takeLatest, put, all, call} from 'redux-saga/effects';

// import {toast} from 'react-toastify';
import {insertSuccess, deleteSuccess} from './actions';
import {api} from '~/service/api';

export function* insert({payload}: any) {
  try {
    const {post} = payload;
    yield put(insertSuccess(post));
    // toast.success(`Sucesso no cadastro`);
  } catch (erro) {
    // toast.error('Erro na autenticação');
  }
}
function* deletePost({payload}: any) {
  try {
    const {id} = payload;
    yield call(api.delete, `/posts/${id}`);
    yield put(deleteSuccess(id));
    // toast.success(`Sucesso no cadastro`);
    // history.back();
  } catch (erro) {
    // console.log(erro);
    // toast.error('Erro na autenticação');
  }
}
function* getPosts({payload}: any) {
  try {
    const {title} = payload;
    if (title === '') {
      return;
    }
    yield call(api.delete, `/posts?${title}`);
    yield put(deleteSuccess(title));
    // toast.success(`Sucesso no cadastro`);
    // history.back();
  } catch (erro) {
    // console.log(erro);
    // toast.error('Erro na autenticação');
  }
}

export default all([
  takeLatest('@post/INSERT_REQUEST', insert),
  takeLatest('@post/DELETE_REQUEST', deletePost),
  takeLatest('@post/GET_REQUEST', getPosts),
]);
