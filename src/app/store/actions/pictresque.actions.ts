import { Action } from "@ngrx/store";
import { Post } from "../models/Post";
import { Pixbay } from "src/app/models/pixbay";

export enum PictresqueActionTypes {
  CREATE_POST = "[PICTRESQUE] Create Post",
  CREATE_POST_SUCCESS = "[PICTRESQUE] Create Post Success",
  CREATE_POST_FAILURE = "[PICTRESQUE] Create Post Failure",
  GET_POSTS = "[PICTRESQUE] Get Posts",
  GET_POSTS_SUCCESS = "[PICTRESQUE] Get Posts Success",
  GET_POSTS_FAILURE = "[PICTRESQUE] Get Posts Failure",
  GET_PIXABAY_POSTS = "[PICTRESQUE] Get Posts",
  GET_PIXABAY_POSTS_SUCCESS = "[PICTRESQUE] Get Posts Success",
  GET_PIXABAY_POSTS_FAILURE = "[PICTRESQUE] Get Posts Failure",
  GET_SEARCHWORD = "[PICTRESQUE] Get SearchWord",
  GET_SEARCHWORD_SUCCESS = "[PICTRESQUE] Get SearchWord Success",
  GET_SEARCHWORD_FAILURE = "[PICTRESQUE] Get SearchWord Failure",
  GET_CATEGORY_POSTS = "[PICTRESQUE] Get Cataegory Posts",
  GET_CATEGORY_POSTS_SUCCESS = "[PICTRESQUE] Get Cataegory Posts Success"
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
// get SearchWord Actions
export class GetPixabayAction implements Action {
  readonly type = PictresqueActionTypes.GET_PIXABAY_POSTS;
  constructor(public payload: any) {}
}
export class GetPixabaySuccessAction implements Action {
  readonly type = PictresqueActionTypes.GET_PIXABAY_POSTS_SUCCESS;

  constructor(public payload: Array<Pixbay>) {
    console.log("pixbay posts -->", payload);
  }
}
export class GetPixabayFailureAction implements Action {
  readonly type = PictresqueActionTypes.GET_PIXABAY_POSTS_FAILURE;

  constructor(public payload: Error) {}
}
// get searchword actions
export class GetSearchWordAction implements Action {
  readonly type = PictresqueActionTypes.GET_SEARCHWORD;
}
export class GetSearchWordActionSuccess implements Action {
  readonly type = PictresqueActionTypes.GET_SEARCHWORD_SUCCESS;

  constructor(public payload: any) {}
}

export class GetSearchWordActionFailure implements Action {
  readonly type = PictresqueActionTypes.GET_SEARCHWORD_FAILURE;

  constructor(public payload: Error) {}
}

export class GetCategoryPostsAction implements Action {
  readonly type = PictresqueActionTypes.GET_CATEGORY_POSTS;

  constructor(public payload: string) {}
}

export class GetCategoryPostsActionSuccess implements Action {
  readonly type = PictresqueActionTypes.GET_CATEGORY_POSTS_SUCCESS;

  constructor(public payload: Array<Post>) {}
}

export type PictresqueAction =
  | CreatePostAction
  | CreatePostSuccessAction
  | CreatePostFailureAction
  | GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailureAction
  | GetPixabayAction
  | GetPixabaySuccessAction
  | GetPixabayFailureAction
  | GetSearchWordAction
  | GetSearchWordActionSuccess
  | GetSearchWordActionFailure
  | GetCategoryPostsAction
  | GetCategoryPostsActionSuccess;
