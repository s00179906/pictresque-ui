import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import {
  PictresqueAction,
  PictresqueActionTypes,
  GetPostsSuccessAction,
  GetPostsFailureAction,
  CreatePostSuccessAction,
  CreatePostFailureAction
} from "../actions/pictresque.actions";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { of } from "rxjs";

@Injectable()
export class PictresqueEffects {
  constructor(
    private actions$: Actions,
    private pictresqueService: PictresqueAPIService
  ) {}

  @Effect() loadPosts$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.GET_POSTS),
    mergeMap(() =>
      this.pictresqueService.getAllPosts().pipe(
        map(data => new GetPostsSuccessAction(data)),
        catchError(error => of(new GetPostsFailureAction(error)))
      )
    )
  );

  @Effect() createNewPost$ = this.actions$.pipe(
    ofType<PictresqueAction>(PictresqueActionTypes.CREATE_POST),
    switchMap(action => {
      console.log("in pictresque effects", action);
      return this.pictresqueService.uploadImage(action["payload"]).pipe(
        map(data => new CreatePostSuccessAction(data["newPost"])),
        catchError(error => of(new CreatePostFailureAction(error)))
      );
    })
  );
}
