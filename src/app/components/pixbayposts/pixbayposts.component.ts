import { Component, OnInit } from '@angular/core';
import { PixbayApiService } from 'src/app/services/pixbay-api.service';
import { Pixbay } from 'src/app/models/pixbay';

@Component({
  selector: 'app-pixbayposts',
  templateUrl: './pixbayposts.component.html',
  styleUrls: ['./pixbayposts.component.scss']
})
export class PixbayPostsComponent implements OnInit {
  hits: any = [];
  searchWord: any;

  constructor(private apiService: PixbayApiService) {
    this.apiService.getImageData().subscribe(hits => {
      this.hits = hits;
      console.log(this.hits);
    });
  }
  Search(searchTerm: string): boolean {
    console.log('Search Works');
    this.apiService.getSearchTerm(searchTerm).subscribe(searchWord => {
      this.searchWord = this.searchWord;
    });
    return false;
  }

  ngOnInit() {
    this.Search('');
  }
}
