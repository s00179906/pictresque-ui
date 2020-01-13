import { Component, OnInit } from "@angular/core";
import { PictresqueAPIService } from "src/app/services/pictresque-service/pictresque-api.service";
import { Category } from "src/app/interfaces/Category";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  category: Category;
  categoryId: string;

  constructor(
    private pictresqueService: PictresqueAPIService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get("id");
    this.pictresqueService
      .getSinglePostCategory(this.categoryId)
      .subscribe(category => {
        this.category = category;
      });
  }
}
