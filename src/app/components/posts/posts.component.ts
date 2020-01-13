import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/store/models/Post";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import {
  GetPostsAction,
  CreatePostSuccessTestAction
} from "src/app/store/actions/pictresque.actions";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  $posts: Observable<Array<Post>>;
  $errors: Error;
  $loading: Boolean;

  constructor(
    private _store: Store<State>,
    private _pictresqueService: PictresqueAPIService
  ) {
    this._pictresqueService.getPosts().subscribe((post: Post) => {
      this._store.dispatch(new CreatePostSuccessTestAction(post));
    });
  }

  ngOnInit() {
    this.$posts = this._store.select(state => state.pictresque.posts);
    this._store
      .select(state => state.pictresque.error)
      .subscribe(errors => (this.$errors = errors));
    this._store
      .select(state => state.pictresque.loading)
      .subscribe(loading => (this.$loading = loading));

    this._store.dispatch(new GetPostsAction());
    console.log("ARE POST LOADING -->", this.$loading);
  }
}
