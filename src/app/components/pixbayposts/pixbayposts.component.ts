import { Component, OnInit, Input } from "@angular/core";
import { PixbayApiService } from "src/app/services/pixbay-service/pixbay-api.service";

@Component({
  selector: "app-pixbayposts",
  templateUrl: "./pixbayposts.component.html",
  styleUrls: ["./pixbayposts.component.scss"]
})
export class PixbayPostsComponent implements OnInit {
  posts: any = [];
  searchWord = "any";

  constructor(private apiService: PixbayApiService) {}

  ngOnInit() {
    this.apiService.getSearchTerm(this.searchWord).subscribe(hits => {
      this.posts = hits["hits"];
      console.log(this.posts);
    });
  }
}
