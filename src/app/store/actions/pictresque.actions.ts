import { Action } from "@ngrx/store";
import { Post } from "../models/Post";

export enum PictresqueActionTypes {
  ADD_POST = "[PICTRESQUE] Add Post",
  ADD_POST_SUCCESS = "[PICTRESQUE] Add Post Success",
  ADD_POST_FAILURE = "[PICTRESQUE] Add Post Failure",
  GET_POSTS = "[PICTRESQUE] Get Posts",
  GET_POSTS_SUCCESS = "[PICTRESQUE] Get Posts Success",
  GET_POSTS_FAILURE = "[PICTRESQUE] Get Posts Failure"
}
export class AddPostAction implements Action {
  readonly type = PictresqueActionTypes.ADD_POST;
  constructor(public payload: any) {}
}
export class AddPostSuccessAction implements Action {
  readonly type = PictresqueActionTypes.ADD_POST_SUCCESS;

  constructor(public payload: Post) {
    console.log("NEW POST -->", payload);
  }
}
export class AddPostFailureAction implements Action {
  readonly type = PictresqueActionTypes.ADD_POST_FAILURE;

  constructor(public payload: Error) {}
}
export class GetPostsAction implements Action {
  readonly type = PictresqueActionTypes.GET_POSTS;
}
export class GetPostsSuccessAction implements Action {
  readonly type = PictresqueActionTypes.GET_POSTS_SUCCESS;

  constructor(public payload: Array<Post>) {
    console.log("POSTS -->", payload);
  }
}
export class GetPostsFailureAction implements Action {
  readonly type = PictresqueActionTypes.GET_POSTS_FAILURE;

  constructor(public payload: Error) {}
}

export type PictresqueAction =
  | AddPostAction
  | AddPostSuccessAction
  | AddPostFailureAction
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailureAction;
