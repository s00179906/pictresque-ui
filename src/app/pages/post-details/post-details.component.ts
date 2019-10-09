import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PictresqueAPIService } from 'src/app/services/pictresque-api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  id: any;
  post: any;
  constructor(
    private route: ActivatedRoute,
    private pictresqueService: PictresqueAPIService
  ) {}

  getSinglePost = id => {
    this.pictresqueService.getSinglePost(id).subscribe(
      res => {
        console.log(res);
        this.post = res;
      },
      error => {
        console.log(error);
      }
    );
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('THE ID IS ', params.id);
      this.id = params.id;
    });
    this.getSinglePost(this.id);
  }
}
