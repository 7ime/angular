import {initialPostState, IPostState} from "../state/post.state";
import {EPostActions, PostActions} from "../actions/post.actions";

export const postReducers = (state = initialPostState, action: PostActions): IPostState => {
  switch (action.type) {
    case EPostActions.GetPosts: {
      console.log(action.payload)
      return {
        ...state,
        posts: action.payload
      };
    }
    default:
      return state;
  }
};
