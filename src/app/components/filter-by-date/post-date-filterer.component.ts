import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import { map } from "rxjs/operators";
import { Post } from "src/app/store/models/Post.model";

@Component({
  selector: "app-post-date-filterer",
  templateUrl: "./post-date-filterer.component.html",
  styleUrls: ["./post-date-filterer.component.scss"]
})
export class PostDateFiltererComponent implements OnInit {
  posts: any[];

  constructor(private _store: Store<State>) {
    this._store
      .select(state => state.pictresque.posts)
      .subscribe(posts => (this.posts = posts));

    this.filterByDate();
  }

  filterByDate() {
    this.posts = this.posts.sort((a, b) => b.date - a.date);
    console.log(this.posts);
  }

  ngOnInit() {}
}
