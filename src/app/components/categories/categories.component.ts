import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  ElementRef
} from "@angular/core";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { Category } from "src/app/models/Category";
import { State } from "src/app/store/models/state.model";
import { Store } from "@ngrx/store";
import {
  GetCategoryPostsAction,
  GetPostsAction
} from "src/app/store/actions/pictresque.actions";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: String = "All Categories";

  constructor(
    private pictresqueService: PictresqueAPIService,
    private store: Store<State>
  ) {}

  fetchCategoryPosts(category: string, categoryId: string): void {
    console.log(category, categoryId);
    this.selectedCategory = category.toUpperCase();

    this.store.dispatch(new GetCategoryPostsAction(categoryId));
  }

  fetchAllCategoryPosts(): void {
    this.selectedCategory = "All Categories";
    this.store.dispatch(new GetPostsAction());
  }

  ngOnInit() {
    this.pictresqueService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
