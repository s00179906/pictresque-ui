import { Action } from "@ngrx/store";
import { Post } from "./models/Post";
import { Pixbay } from "src/app/interfaces/pixbay";

export enum PictresqueActionTypes {
  SHOW_NAVBAR = "[PICTRESQUE] Show navbar action",
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
  GET_CATEGORY_POSTS_SUCCESS = "[PICTRESQUE] Get Cataegory Posts Success",
  CREATE_POST_TEST = "[PICTRESQUE] Create Post Test",
  CREATE_POST_TEST_SUCCESS = "[PICTRESQUE] Create Post Test Success",
  TOGGLE_FORM_SUCCESS = "[PICTRESQUE] Toggle Login/Register Form",
  FILTER_POSTS_BY_CATEGORY = "[PICTRESQUE] Get posts filtered by category",
  FILTER_POSTS_BY_DATE_ASCENDING = "[PICTRESQUE] Get posts filtered by date ascending",
  FILTER_POSTS_BY_DATE_DESCENDING = "[PICTRESQUE] Get posts filtered by date descending"
}

export class ShowNavbarAction implements Action {
  readonly type = PictresqueActionTypes.SHOW_NAVBAR;
  constructor(public payload: Boolean) {}
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
export class CreatePostTestAction implements Action {
  readonly type = PictresqueActionTypes.CREATE_POST_TEST;
  constructor(public payload: any) {}
}
export class CreatePostSuccessTestAction implements Action {
  readonly type = PictresqueActionTypes.CREATE_POST_TEST_SUCCESS;

  constructor(public payload: Post) {}
}
export class GetPostsAction implements Action {
  readonly type = PictresqueActionTypes.GET_POSTS;
}
export class GetPostsSuccessAction implements Action {
  readonly type = PictresqueActionTypes.GET_POSTS_SUCCESS;

  constructor(public payload: Array<Post>) {}
}
export class GetPostsFailureAction implements Action {
  readonly type = PictresqueActionTypes.GET_POSTS_FAILURE;

  constructor(public payload: Error) {}
}
export class GetPixabayAction implements Action {
  readonly type = PictresqueActionTypes.GET_PIXABAY_POSTS;
  constructor(public payload: any) {}
}
export class GetPixabaySuccessAction implements Action {
  readonly type = PictresqueActionTypes.GET_PIXABAY_POSTS_SUCCESS;

  constructor(public payload: Array<Pixbay>) {}
}
export class GetPixabayFailureAction implements Action {
  readonly type = PictresqueActionTypes.GET_PIXABAY_POSTS_FAILURE;

  constructor(public payload: Error) {}
}
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
export class ToggleFormActionSuccess implements Action {
  readonly type = PictresqueActionTypes.TOGGLE_FORM_SUCCESS;

  constructor(public payload: Boolean) {}
}

export class FilterPostsByCategoryAction implements Action {
  readonly type = PictresqueActionTypes.FILTER_POSTS_BY_CATEGORY;
  constructor(public category: String) {}
}

export class FilterPostsByDateAscendingAction implements Action {
  readonly type = PictresqueActionTypes.FILTER_POSTS_BY_DATE_ASCENDING;
}
export class FilterPostsByDateDescendingAction implements Action {
  readonly type = PictresqueActionTypes.FILTER_POSTS_BY_DATE_DESCENDING;
}

export type PictresqueAction =
  | ShowNavbarAction
  | CreatePostAction
  | CreatePostSuccessAction
  | CreatePostFailureAction
  | CreatePostTestAction
  | CreatePostSuccessTestAction
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
  | GetCategoryPostsActionSuccess
  | ToggleFormActionSuccess
  | FilterPostsByCategoryAction
  | FilterPostsByDateAscendingAction
  | FilterPostsByDateDescendingAction;
