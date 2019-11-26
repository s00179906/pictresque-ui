import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SearchModalComponent } from "../search-modal/search-modal.component";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  imgSearch = "../../assets/search.png";

  constructor(private modalService: NgbModal) {}

  openSearchModal() {
    const modalRef = this.modalService.open(SearchModalComponent, {
      size: "lg"
    });
    modalRef.componentInstance.name = "World";
  }

  ngOnInit() {}
}
