import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { PictresqueAPIService } from 'src/app/services/pictresque-api.service';

@Component({
  selector: 'app-modelcontent',
  templateUrl: './modelcontent.component.html',
  styleUrls: ['./modelcontent.component.scss']
})
export class ModelcontentComponent implements OnInit {
  name: String = 'Ibrah';
  url: String = 'https://pictresqueapi.herokuapp.com/';
  imageUploaded: Boolean = false;
  fileToUpload: any;
  imageSrc: any;
  imageSelected: String = '';
  userFile: any;
  file: any;
  constructor(
    public activeModal: NgbActiveModal,
    private pictrService: PictresqueAPIService
  ) {}

  ngOnInit() {}
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

  createPost = (title, desc) => {
    this.pictrService.uploadImage(this.file, title, desc).subscribe(result => {
      console.log(result);
    });
  };
}
