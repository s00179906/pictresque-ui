import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { Post } from "src/app/store/models/Post";
import { HighlightDirective } from "src/app/directives/highlight.directive";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"]
})
export class PostDetailsComponent implements OnInit {
  //this is an array for the carousel
  public posts$: Post[] = [];

  public singlePost: Post;

  id: any;
  post: any;
  setAutoHide: any;
  action: any;
  constructor(
    private route: ActivatedRoute,
    private pictresqueService: PictresqueAPIService
  ) {
    this.pictresqueService.getAllPosts().subscribe((posts: Post[]) => {
      this.posts$ = posts;
    });

    this.pictresqueService.getPosts().subscribe((post: Post) => {
      this.posts$.push(post);
    });
  }

  getSinglePost = id => {
    this.pictresqueService.getSinglePost(id).subscribe(
      res => {
        //console.log(res);
        this.post = res;
        this.singlePost = res;
        //this.posts$.unshift(res);
      },
      error => {
        //console.log(error);
      }
    );
  };

  like() {
    console.log(this.id);
    this.pictresqueService.likeImage(this.id).subscribe(res => {
      console.log(res);
    });
  }

  unlike() {
    console.log(this.id);
    this.pictresqueService.unlikeImage(this.id).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    console.log(this.posts$);
    console.log(this.singlePost);
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      console.log("THE ID IS ", params.id);
      this.id = params.id;
      this.getSinglePost(this.id);
    });
    this.posts$.unshift(this.singlePost);
  }
}
