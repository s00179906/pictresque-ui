import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModelcontentComponent } from "../modelcontent/modelcontent.component";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open() {
    const modalRef = this.modalService.open(ModelcontentComponent, {
      size: "lg",
      centered: true,
      backdropClass: "backdropShadow"
    });
    modalRef.componentInstance.name = "World";
  }
}
