import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { Post } from "src/app/store/models/Post";
import { HighlightDirective } from "src/app/directives/highlight.directive";
import { PixbayApiService } from "src/app/services/pixbay-service/pixbay-api.service";
import { Pixbay } from "src/app/interfaces/pixbay";

@Component({
  selector: "app-pixabaypost-details",
  templateUrl: "./pixabaypost-details.component.html",
  styleUrls: ["./pixabaypost-details.component.scss"]
})
export class PixabaypostDetailsComponent implements OnInit {
  public posts$: Pixbay[] = [];

  public singlePost: Pixbay;

  id: any;
  post: any;
  setAutoHide: any;
  action: any;
  constructor(
    private route: ActivatedRoute,
    private pixabayService: PixbayApiService
  ) {}
  getSinglePost = id => {
    this.pixabayService.getSinglePost(id).subscribe(hits => {
      this.singlePost = hits["hits"];
      console.log("Res =", hits);
    });
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("THE ID IS ", params.id);
      this.id = params.id;
      this.getSinglePost(this.id);
    });
    this.posts$.unshift(this.singlePost);
  }
}
