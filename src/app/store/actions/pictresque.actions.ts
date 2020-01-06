import { Action } from "@ngrx/store";
import { Post } from "../models/Post";

export enum PictresqueActionTypes {
  CREATE_POST = "[PICTRESQUE] Create Post",
  CREATE_POST_SUCCESS = "[PICTRESQUE] Create Post Success",
  CREATE_POST_FAILURE = "[PICTRESQUE] Create Post Failure",
  GET_POSTS = "[PICTRESQUE] Get Posts",
  GET_POSTS_SUCCESS = "[PICTRESQUE] Get Posts Success",
  GET_POSTS_FAILURE = "[PICTRESQUE] Get Posts Failure"
}
export class CreatePostAction implements Action {
  readonly type = PictresqueActionTypes.CREATE_POST;
  constructor(public payload: any) {}
}
export class CreatePostSuccessAction implements Action {
  readonly type = PictresqueActionTypes.CREATE_POST_SUCCESS;

  constructor(public payload: Post) {
    console.log("NEW POST -->", payload);
  }
}
export class CreatePostFailureAction implements Action {
  readonly type = PictresqueActionTypes.CREATE_POST_FAILURE;

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
  | CreatePostAction
  | CreatePostSuccessAction
  | CreatePostFailureAction
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailureAction;
