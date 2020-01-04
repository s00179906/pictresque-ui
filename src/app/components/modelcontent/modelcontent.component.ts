import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { PictresqueAPIService } from "src/app/services/pictresque-api.service";
import Swal from "sweetalert2";
import { PictresqueState } from "src/app/store/reducers/pictresque.reducer";
import { Store } from "@ngrx/store";
import {
  AddPostAction,
  AddPostSuccessAction
} from "src/app/store/actions/pictresque.actions";
import { State } from "src/app/store/models/state.model";

@Component({
  selector: "app-modelcontent",
  templateUrl: "./modelcontent.component.html",
  styleUrls: ["./modelcontent.component.scss"]
})
export class ModelcontentComponent implements OnInit {
  url: String = "https://pictresqueapi.herokuapp.com/";
  imageUploaded: Boolean = false;
  fileToUpload: any;
  imageSrc: any;
  imageSelected: String = "";
  userFile: any;
  file: any;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<State>,
    private pictrService: PictresqueAPIService
  ) {}

  getImage(files: FileList) {
    this.file = files;
    this.userFile = files[0];
    this.imageSelected = this.userFile.name;
    if (files && this.userFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(this.userFile);
      this.imageUploaded = true;
    }
  }

  // createPost = (title, desc) => {
  //   if (!title || !desc) return this.alert("Title & Description required!");

  //   if (!this.file) return this.alert("Oops, an image is required!");

  //   this.pictrService.uploadImage(this.file, title, desc).subscribe(result => {
  //     console.log(result);
  //   });

  //   localStorage.setItem("newPost", "true");

  //   return this.activeModal.dismiss();
  // };
  createPost = (title, desc) => {
    if (!title || !desc) return this.alert("Title & Description required!");

    if (!this.file) return this.alert("Oops, an image is required!");

    const post = {
      file: this.file,
      desc,
      title
    };

    // this.pictrService.uploadImage(post).subscribe(result => {
    //   console.log(result);
    // });

    this.store.dispatch(new AddPostAction(post));
    return this.activeModal.dismiss();
  };

  alert(msg: string) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: msg,
      showConfirmButton: false,
      timer: 2000
    });
  }

  ngOnInit() {}
}
