import {IPost} from '../../models/post';

export interface IPostState {
  posts: IPost[];
}

export const initialPostState: IPostState = {
  posts: [
    {
      id: 1,
      title: 'hello world'
    }
  ]
};
