import produce from 'immer';
const INITIAL_STATE = {
  posts: [],
};

export default function post(state = INITIAL_STATE, action: any) {
  return produce(state, (draft: any) => {
    let {payload} = action;
    switch (action.type) {
      case '@post/INSERT_REQUEST': {
        break;
      }
      case '@post/INSERT_SUCCESS': {
        draft.posts.push(payload.post);
        break;
      }
      case '@post/DELETE_REQUEST': {
        break;
      }
      case '@post/DELETE_SUCCESS': {
        draft.posts = draft.posts.filter((post: any) => {
          return post.id !== payload.id;
        });
        break;
      }
      case '@post/GET_REQUEST': {
        break;
      }
      case '@post/GET_SUCCESS': {
        break;
      }
      default:
    }
  });
}
