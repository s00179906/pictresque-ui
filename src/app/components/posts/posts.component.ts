import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/models/Post";
import { PictresqueAPIService } from "src/app/services/pictresque-api.service";
import { Router } from "@angular/router";
import { HighlightDirective } from "src/app/directives/highlight.directive";
import { PixbayApiService } from "src/app/services/pixbay-api.service";
import { compileNgModule } from "@angular/compiler";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(
    private pictresqueService: PictresqueAPIService,
    private pixbayService: PixbayApiService,
    private router: Router
  ) {}

  goToDetails = e => {
    const id = e._id;
    this.router.navigate([`post/${id}`]);
  };

  addToFavourites = post => {
    alert("pin clicked");
  };

  ngOnInit() {
    this.pictresqueService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
