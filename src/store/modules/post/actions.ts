export function insertRequest(post: any) {
  return {
    type: '@post/INSERT_REQUEST',
    payload: {post},
  };
}

export function insertSuccess(post: any) {
  return {
    type: '@post/INSERT_SUCCESS',
    payload: {post},
  };
}
export function deleteRequest(id: any) {
  return {
    type: '@post/DELETE_REQUEST',
    payload: {id},
  };
}

export function deleteSuccess(id: any) {
  return {
    type: '@post/DELETE_SUCCESS',
    payload: {id},
  };
}

export function getRequest(title: any) {
  return {
    type: '@post/GET_REQUEST',
    payload: {title},
  };
}

export function getSuccess(posts: any) {
  return {
    type: '@post/GET_SUCCESS',
    payload: {posts},
  };
}
