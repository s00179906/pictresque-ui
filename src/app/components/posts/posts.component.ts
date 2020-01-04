import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/store/models/Post";
import { PictresqueAPIService } from "src/app/services/pictresque-api.service";
import { Router } from "@angular/router";
import { HighlightDirective } from "src/app/directives/highlight.directive";
import { PixbayApiService } from "src/app/services/pixbay-api.service";
import { compileNgModule, CompilerConfig } from "@angular/compiler";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import { GetPostsAction } from "src/app/store/actions/pictresque.actions";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  // posts: Post[];
  posts$: Observable<Array<Post>>;

  constructor(
    private pictresqueService: PictresqueAPIService,
    private pixbayService: PixbayApiService,
    private router: Router,
    private store: Store<State>
  ) {}

  goToDetails = e => {
    const id = e._id;
    this.router.navigate([`post/${id}`]);
  };

  addToFavourites = post => {
    alert("pin clicked");
  };

  ngOnInit() {
    // this.pictresqueService.getAllPosts().subscribe(posts => {
    //   this.posts = posts;
    // });

    this.posts$ = this.store.select(store => store.pictresque.posts);
    this.store.dispatch(new GetPostsAction());
  }
}
