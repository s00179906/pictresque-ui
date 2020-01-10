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
    private actions$: Actions,
    private pictresqueService: PictresqueAPIService,
    private pixabayService: PixbayApiService
  ) {}

  @Effect() loadPosts$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_POSTS),
    mergeMap(() =>
      this.pictresqueService.getAllPosts().pipe(
        map(data => new GetPostsSuccessAction(data)),
        catchError(error => of(new GetPixabayFailureAction(error)))
      )
    )
  );

  @Effect() getCategoryPosts$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_CATEGORY_POSTS),
    mergeMap(action => {
      return this.pictresqueService
        .getSingleCategory(action["payload"])
        .pipe(map(data => new GetCategoryPostsActionSuccess(data["posts"])));
    })
  );

  @Effect() loadPixabayPosts$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_PIXABAY_POSTS),
    switchMap(action => {
      return this.pixabayService.getSearchTerm(action["payload"]).pipe(
        map(data => new GetPixabaySuccessAction(data["hits"])),
        catchError(error => of(new GetPixabayFailureAction(error)))
      );
    })
  );

  @Effect() createNewPost$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.CREATE_POST),
    switchMap(action => {
      console.log("IN PICTRESQUE EFFECTS --> ", action);
      return this.pictresqueService.uploadImage(action["payload"]).pipe(
        map(data => {
          console.log(data);
          new CreatePostSuccessAction(data["newPost"]);
        }),
        catchError(error => of(new CreatePostFailureAction(error)))
      );
    })
  );
}
