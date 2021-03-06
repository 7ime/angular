import {Action} from "@ngrx/store";
import {IPost} from "../../models/post";

export enum EPostActions {
  GetPosts = '[Post] Get posts'
}

export class GetPosts implements Action {
  public readonly type = EPostActions.GetPosts;
  constructor(public payload: IPost[]) {}
}

export type PostActions = GetPosts;


