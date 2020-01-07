import { Component, OnInit } from '@angular/core';
import { PixbayApiService } from 'src/app/services/pixbay-service/pixbay-api.service';
import { Pixbay } from 'src/app/models/pixbay';

@Component({
  selector: 'app-pixbayposts',
  templateUrl: './pixbayposts.component.html',
  styleUrls: ['./pixbayposts.component.scss']
})
export class PixbayPostsComponent implements OnInit {
  posts: any = [];
  searchWord: any;

  constructor(private apiService: PixbayApiService) {}

  Search = (searchTerm: string): boolean => {
    console.log('Search Works');
    this.apiService.getSearchTerm(searchTerm).subscribe(searchWord => {
      this.searchWord = this.searchWord;
    });
    return false;
  };

  ngOnInit() {
    
    this.Search('');
    this.apiService.getImageData().subscribe(hits => {
      this.posts = hits['hits'];
      console.log(this.posts);
    });
  }
}
