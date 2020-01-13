import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import {
  PictresqueAction,
  PictresqueActionTypes,
  GetPostsSuccessAction,
  GetPostsFailureAction,
  CreatePostSuccessAction,
  CreatePostFailureAction,
  GetPixabaySuccessAction,
  GetPixabayFailureAction,
  GetPixabayAction,
  GetCategoryPostsActionSuccess
} from "../actions/pictresque.actions";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { of, merge } from "rxjs";
import { PixbayApiService } from "src/app/services/pixbay-service/pixbay-api.service";

@Injectable()
export class PictresqueEffects {
  constructor(
    private _actions: Actions,
    private _pictresqueService: PictresqueAPIService,
    private _pixabayService: PixbayApiService
  ) {}

  @Effect() $loadPosts = this._actions.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_POSTS),
    mergeMap(() =>
      this._pictresqueService.getPictresquePosts().pipe(
        map(data => new GetPostsSuccessAction(data)),
        catchError(error => of(new GetPostsFailureAction(error)))
      )
    )
  );

  @Effect() $getCategoryPosts = this._actions.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_CATEGORY_POSTS),
    mergeMap(action => {
      console.log(action);
      return this._pictresqueService
        .getSinglePostCategory(action["payload"])
        .pipe(map(data => new GetCategoryPostsActionSuccess(data["posts"])));
    })
  );

  @Effect() $loadPixabayPosts = this._actions.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_PIXABAY_POSTS),
    switchMap(action => {
      return this._pixabayService.getSearchTerm(action["payload"]).pipe(
        map(data => new GetPixabaySuccessAction(data["hits"])),
        catchError(error => of(new GetPixabayFailureAction(error)))
      );
    })
  );

  @Effect() $createNewPost = this._actions.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.CREATE_POST),
    switchMap(action => {
      return this._pictresqueService.createNewPost(action["payload"]).pipe(
        map(data => {
          new CreatePostSuccessAction(data["newPost"]);
        }),
        catchError(error => of(new CreatePostFailureAction(error)))
      );
    })
  );
}
