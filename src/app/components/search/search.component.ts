import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SearchModalComponent } from "../search-modal/search-modal.component";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import { GetSearchWordActionSuccess } from "src/app/store/actions/pictresque.actions";
import { Observable } from "rxjs";
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
  openSearchModal() {
    const modalRef = this.modalService.open(SearchModalComponent, {
      size: "lg",
      windowClass: "modal-holder",
      centered: true
    });
    modalRef.componentInstance.name = "World";
  }

  ngOnInit() {}
}
