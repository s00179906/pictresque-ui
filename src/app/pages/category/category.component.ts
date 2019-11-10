import { Component, OnInit } from '@angular/core';
import { PictresqueAPIService } from 'src/app/services/pictresque-api.service';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: Category;
  categoryId: string;

  constructor(
    private pictresqueService: PictresqueAPIService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.pictresqueService
      .getSingleCategory(this.categoryId)
      .subscribe(category => {
        this.category = category;
        console.log('SINGLE CATEGORY FROM CATEGORY PAGE:', this.category);
      });
  }
}
