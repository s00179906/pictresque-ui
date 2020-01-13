import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  ElementRef
} from "@angular/core";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { ICategory } from "src/app/interfaces/ICategory";
import { State } from "src/app/store/models/state.model";
import { Store } from "@ngrx/store";
import {
  GetCategoryPostsAction,
  GetPostsAction,
  FilterPostsByCategoryAction
} from "src/app/store/actions/pictresque.actions";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[];
  selectedCategory: String = "All Categories";

  constructor(
    private _pictresqueService: PictresqueAPIService,
    private _store: Store<State>
  ) {}

  fetchCategoryPosts(category: string, categoryId: string): void {
    this.selectedCategory = category.toUpperCase();

    console.log(category);
    this._store.dispatch(new GetCategoryPostsAction(categoryId));
    // this.store.dispatch(new FilterPostsByCategoryAction(categoryId));
  }

  fetchAllCategoryPosts(): void {
    this.selectedCategory = "All Categories";
    this._store.dispatch(new GetPostsAction());
  }

  ngOnInit() {
    this._pictresqueService.getPostCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
