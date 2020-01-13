import { Component, OnInit, Input } from "@angular/core";
import { PixbayApiService } from "src/app/services/pixbay-service/pixbay-api.service";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import { GetPixabayAction } from "src/app/store/pictresque.actions";
import { Observable } from "rxjs";
import { Pixbay } from "src/app/interfaces/pixbay";
@Component({
  selector: "app-pixbayposts",
  templateUrl: "./pixbayposts.component.html",
  styleUrls: ["./pixbayposts.component.scss"]
})
export class PixbayPostsComponent implements OnInit {
  searchWord = "";
  // posts: Observable<Array<Pixbay>>;
  imgSearchObservable: Observable<string>;

  posts: any;
  constructor(
    private apiService: PixbayApiService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.imgSearchObservable = this.store.select(
      store => store.pictresque.searchTerm
    );

    this.imgSearchObservable.subscribe(term => {
      this.apiService.getSearchTerm(term).subscribe(hits => {
        this.posts = hits["hits"];
        // console.log("Peters method", this.posts);
      });
    });

    // this.store.dispatch(new GetPixabayAction(this.searchWord));
    // this.posts = this.store.select(store => store.pictresque.pixabayPosts);
  }
}
