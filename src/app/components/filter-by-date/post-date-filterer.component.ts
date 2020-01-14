import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/state/models/state.model";
import { map } from "rxjs/operators";
import { Post } from "src/app/state/models/Post.model";
import {
  FilterPostsByDateDescendingAction,
  FilterPostsByDateAscendingAction
} from "src/app/state/pictresque.actions";

@Component({
  selector: "app-post-date-filterer",
  templateUrl: "./post-date-filterer.component.html",
  styleUrls: ["./post-date-filterer.component.scss"]
})
export class PostDateFiltererComponent implements OnInit {
  dateType: string = "By Date";

  constructor(private _store: Store<State>) {}

  filterByDateAscending() {
    this.dateType = "Date Ascending";
    this._store.dispatch(new FilterPostsByDateAscendingAction());
  }

  filterByDateDescending() {
    this.dateType = "Date Descending";

    this._store.dispatch(new FilterPostsByDateDescendingAction());
  }

  ngOnInit() {}
}
