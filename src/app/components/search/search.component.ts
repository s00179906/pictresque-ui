import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/state/models/state.model";
import { GetSearchWordActionSuccess } from "src/app/state/pictresque.actions";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(private store: Store<State>) {}

  Search(searchTerm: string) {
    this.store.dispatch(new GetSearchWordActionSuccess(searchTerm));
  }

  ngOnInit() {}
}
