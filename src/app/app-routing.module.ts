import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { PostDetailsComponent } from "./pages/post-details/post-details.component";
import { CategoryComponent } from "./pages/category/category.component";
import { FollowingComponent } from "./pages/following/following.component";
import { PixabaypostDetailsComponent } from "./pages/pixabaypost-details/pixabaypost-details.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "isLeft" } },
  {
    path: "auth",
    component: AuthComponent,
    data: { animation: "isLeft" }
  },
  {
    path: "post/:id",
    component: PostDetailsComponent,
    data: { animation: "isRight" }
  },
  {
    path: "pixabayPost/:id",
    component: PixabaypostDetailsComponent,
    data: { animation: "isRight" }
  },
  {
    path: "categories",
    component: CategoryComponent,
    data: { animation: "isRight" }
  },
  {
    path: "following",
    component: FollowingComponent,
    data: { animation: "isRight" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  AuthComponent,
  PostDetailsComponent,
  CategoryComponent
];
