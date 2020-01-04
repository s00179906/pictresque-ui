import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import {
  PictresqueAction,
  PictresqueActionTypes,
  GetPostsSuccessAction,
  GetPostsFailureAction,
  AddPostFailureAction,
  AddPostSuccessAction
} from "../actions/pictresque.actions";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";
import { PictresqueAPIService } from "src/app/services/pictresque-api.service";
import { of } from "rxjs";

@Injectable()
export class PictresqueEffects {
  @Effect() loadPosts$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_POSTS),
    mergeMap(() =>
      this.pictresqueService.getAllPosts().pipe(
        map(data => new GetPostsSuccessAction(data)),
        catchError(error => of(new GetPostsFailureAction(error)))
      )
    )
  );

  // @Effect() createNewPost$ = this.actions$.pipe(
  //   ofType<PictresqueAction>(PictresqueActionTypes.ADD_POST),
  //   mergeMap(() =>
  //     this.pictresqueService.uploadImage().pipe(
  //       map(data => {
  //         // console.log(data);
  //         new AddPostSuccessAction(data);
  //       }),
  //       catchError(error => of(new AddPostFailureAction(error)))
  //     )
  //   )
  // );

  @Effect() createNewPost$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.ADD_POST),
    switchMap(action => {
      console.log("in course effects", action);
      return this.pictresqueService
        .uploadImage(action["payload"])
        .pipe(map(data => new AddPostSuccessAction(data["newPost"])));
    })
  );

  constructor(
    private actions$: Actions,
    private pictresqueService: PictresqueAPIService
  ) {}
}
