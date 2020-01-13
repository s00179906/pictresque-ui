import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Store } from "@ngrx/store";
import { State } from "src/app/state/models/state.model";
import { GetSearchWordActionSuccess } from "src/app/state/pictresque.actions";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  // imgSearch: string = "";

  constructor(private modalService: NgbModal, private store: Store<State>) {}

  Search(searchTerm: string) {
    // this.imgSearchObservable = this.store.select(
    //   store => store.pictresque.searchTerm
    // );

    // console.log(searchTerm);
    this.store.dispatch(new GetSearchWordActionSuccess(searchTerm));
  }

  ngOnInit() {}
}
