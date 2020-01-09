import { Component, OnInit } from "@angular/core";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { Category } from "src/app/models/Category";
import { State } from "src/app/store/models/state.model";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(
    private pictresqueService: PictresqueAPIService,
    private store: Store<State>
  ) {}

  fetchCategoryPosts(category: string, categoryId: string) {
    console.log(category, categoryId);

    // this.store.dispatch(new )
  }

  ngOnInit() {
    this.pictresqueService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
