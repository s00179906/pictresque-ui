import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "src/app/store/models/Post";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { Router } from "@angular/router";
import { PixbayApiService } from "src/app/services/pixbay-service/pixbay-api.service";
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import {
  GetPostsAction,
  CreatePostAction,
  CreatePostTestAction,
  CreatePostSuccessTestAction
} from "src/app/store/actions/pictresque.actions";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts$: Observable<Array<Post>>;
  // public posts$: Post[] = [];

  constructor(
    private store: Store<State>,
    private pictresqueService: PictresqueAPIService
  ) {
    // this.pictresqueService.getAllPosts().subscribe((posts: Post[]) => {
    //   this.posts$ = posts;
    //   this.store.dispatch(new GetPostsAction());
    // });
    this.pictresqueService.getPosts().subscribe((post: Post) => {
      console.log(post);
      this.store.dispatch(new CreatePostSuccessTestAction(post));
    });
  }

  ngOnInit() {
    this.posts$ = this.store.select(store => store.pictresque.posts);
    this.store.dispatch(new GetPostsAction());
  }

  ngAfterViewChecked() {
    // console.log(this.posts$);
  }
}
