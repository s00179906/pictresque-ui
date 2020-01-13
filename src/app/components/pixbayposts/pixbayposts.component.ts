import { Component, OnInit, Input } from "@angular/core";
import { PixbayApiService } from "src/app/services/pixbay-service/pixbay-api.service";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import { GetPixabayAction } from "src/app/store/actions/pictresque.actions";
import { Observable } from "rxjs";
import { Pixbay } from "src/app/interfaces/pixbay";
@Component({
  selector: "app-pixbayposts",
  templateUrl: "./pixbayposts.component.html",
  styleUrls: ["./pixbayposts.component.scss"]
})
export class PixbayPostsComponent implements OnInit {
  searchWord: string;
  searchWordBool: boolean = false;

  imgSearchObservable: Observable<string>;

  posts: any;
  constructor(
    private apiService: PixbayApiService,
    private store: Store<State>
  ) {}

  showResults(term: string) {
    if ((term != "")) {
      this.searchWordBool = true;
    }
  }
  ngOnInit() {
    this.imgSearchObservable = this.store.select(
      store => store.pictresque.searchTerm
    );

    this.imgSearchObservable.subscribe(term => {
      this.apiService.getSearchTerm(term).subscribe(hits => {
        this.posts = hits["hits"];

        this.searchWord = term;
        // console.log("Peters method", this.posts);
      });
    });

    // this.store.dispatch(new GetPixabayAction(this.searchWord));
    // this.posts = this.store.select(store => store.pictresque.pixabayPosts);
  }
}
