import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pixbay } from "../../interfaces/pixbay";

@Injectable({
  providedIn: "root"
})
export class PixbayApiService {
  public apiUrl =
    "https://pixabay.com/api/?key=11999068-334e8043671d15213267678c5&q=";
  public singlePost =
    "https://pixabay.com/api/?key=11999068-334e8043671d15213267678c5&id=";

  constructor(private http: HttpClient) {
    this.getImageData();
  }
  getImageData() {
    return this.http.get(this.apiUrl);
  }

  getSearchTerm(inputValue: string): Observable<Pixbay> {
    return this.http.get<Pixbay>(this.apiUrl + inputValue);
  }
  getSinglePost(id: string): Observable<Pixbay> {
    return this.http.get<Pixbay>(this.singlePost + id);
  }
}
