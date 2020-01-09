import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Post } from "../../store/models/Post.model";
// import { Post } from "../../store/models/Post";
import { Category } from "../../models/Category";
import Pusher from "pusher-js";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import {
  CreatePostAction,
  CreatePostSuccessAction
} from "src/app/store/actions/pictresque.actions";

@Injectable({
  providedIn: "root"
})
export class PictresqueAPIService {
  // url: String = "http://localhost:5001";
  url: String = "https://pictresque-api.herokuapp.com";
  fileToUpload: any;
  userLoggedIn = localStorage.getItem("userLoggedIn");
  private post: Subject<Post> = new Subject<Post>();
  private allPosts: Subject<Post[]> = new Subject<Post[]>();
  private pusherClient: Pusher;

  constructor(private _http: HttpClient, private store: Store<State>) {
    this.pusherClient = new Pusher("83b272f41e06599d5878", { cluster: "eu" });

    const channel = this.pusherClient.subscribe("pictresque");

    channel.bind(
      "new-post",
      (data: {
        _id: string;
        title: string;
        description: string;
        imageUrl: string;
      }) => {
        this.post.next(
          new Post(data._id, data.title, data.description, data.imageUrl)
        );
      }
    );

    // channel.bind("all-posts", data => {
    //   this.allPosts.next(data);
    // });
  }

  getCategories = (): Observable<Category[]> => {
    return this._http.get<Category[]>(`${this.url}/api/v1/categories`);
  };

  getSingleCategory = (id): Observable<Category> => {
    return this._http.get<Category>(`${this.url}/api/v1/category/${id}`);
  };

  getAllPosts = (): Observable<Post[]> => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `bearer ${auth.token}`
    });

    // user id is not being passed
    console.log(auth.id);
    return this._http.get<Post[]>(`${this.url}/api/v1/posts`, {
      headers
    });
  };

  uploadImage = (post: any) => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    console.log(post);

    const headers = new HttpHeaders({
      "Content-Type": "application/form-data",
      Authorization: `bearer ${auth.token}`
    });

    this.fileToUpload = post.file.item(0);
    let formData = new FormData();
    formData.set("image", this.fileToUpload, this.fileToUpload.name);
    formData.set("title", post.title);
    formData.set("description", post.desc);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    console.log(headers);

    return this._http.post(`${this.url}/api/v1/post/create`, formData, {
      headers
    });
  };

  registerUser = (email, password) => {
    const newUser = {
      email,
      password
    };
    return this._http.post(`${this.url}/api/v1/register`, newUser);
  };

  loginUser = (email, password) => {
    return this._http.post(`${this.url}/api/v1/login`, { email, password });
  };

  getSinglePost = id => {
    return this._http.get(`${this.url}/api/v1/post/${id}`);
  };

  getPosts(): Observable<Post> {
    return this.post.asObservable();
  }

  getAllPostsObservable(): Observable<Post[]> {
    return this.allPosts.asObservable();
  }
  httpsOptions() {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `bearer ${auth.token}`
    });

    return headers;
  }

  likeImage = id => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return this._http.post(`${this.url}/api/v1/like/${id}`, {
      userId: auth.id
    });
  };

  unlikeImage = id => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    return this._http.post(`${this.url}/api/v1/unlike/${id}`, {
      userId: auth.id
    });
  };
}
