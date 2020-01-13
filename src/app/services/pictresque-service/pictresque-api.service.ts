import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Post } from "../../store/models/Post.model";
// import { Post } from "../../store/models/Post";
import { Category } from "../../interfaces/Category";
import Pusher from "pusher-js";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/models/state.model";
import {
  CreatePostAction,
  CreatePostSuccessAction
} from "src/app/store/actions/pictresque.actions";
import { IUser } from "src/app/interfaces/IUser";

@Injectable({
  providedIn: "root"
})
export class PictresqueAPIService {
  url: String = "https://pictresque-api.herokuapp.com";
  fileToUpload: any;
  userLoggedIn = localStorage.getItem("userLoggedIn");
  private post: Subject<Post> = new Subject<Post>();
  private allPosts: Subject<Post[]> = new Subject<Post[]>();
  private pusherClient: Pusher;

  constructor(private _http: HttpClient) {
    this.pusherClient = new Pusher("83b272f41e06599d5878", { cluster: "eu" });

    const channel = this.pusherClient.subscribe("pictresque");

    channel.bind(
      "new-post",
      (data: {
        _id: string;
        title: string;
        description: string;
        imageUrl: string;
        createdAt: string;
      }) => {
        this.post.next(
          new Post(
            data._id,
            data.title,
            data.description,
            data.imageUrl,
            data.createdAt
          )
        );
      }
    );

    // channel.bind("all-posts", data => {
    //   this.allPosts.next(data);
    // });
  }

  getPostCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${this.url}/api/v1/categories`);
  }

  getSinglePostCategory(id): Observable<Category> {
    return this._http.get<Category>(`${this.url}/api/v1/category/${id}`);
  }

  getPictresquePosts(): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/api/v1/posts`);
  }

  createNewPost(post: any): Observable<Post> {
    console.log("POST IN UPLOADIMAGE -->", post);
    const auth = JSON.parse(localStorage.getItem("auth"));

    const headers = new HttpHeaders({
      "Content-Type": "application/form-data",
      Authorization: `bearer ${auth.token}`
    });

    this.fileToUpload = post.file.item(0);
    let formData = new FormData();
    formData.set("image", this.fileToUpload, this.fileToUpload.name);
    formData.set("title", post.title);
    formData.set("description", post.desc);
    formData.set("categoryId", post.category);

    return this._http.post<Post>(`${this.url}/api/v1/post/create`, formData);
  }

  registerUser(email: string, password: string): Observable<IUser> {
    const newUser = {
      email,
      password
    };
    return this._http.post<IUser>(`${this.url}/api/v1/register`, newUser);
  }

  loginUser(email, password): Observable<IUser> {
    return this._http.post<IUser>(`${this.url}/api/v1/login`, {
      email,
      password
    });
  }

  getSinglePost(id): Observable<Post> {
    return this._http.get<Post>(`${this.url}/api/v1/post/${id}`);
  }

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
