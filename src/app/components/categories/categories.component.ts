import { Component, OnInit } from '@angular/core';
import { PictresqueAPIService } from 'src/app/services/pictresque-api.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private pictresqueService: PictresqueAPIService) {}

  ngOnInit() {
    this.pictresqueService.getCategories().subscribe(categories => {
      console.log('CATEGORIES IN CATEGORY COMPONENT:', categories);
      this.categories = categories;
    });
  }
}
