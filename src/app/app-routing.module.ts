import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { PostDetailsComponent } from "./pages/post-details/post-details.component";
import { CategoryComponent } from "./pages/category/category.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "isLeft" } },
  {
    path: "register",
    component: RegisterComponent,
    data: { animation: "isLeft" }
  },
  {
    path: "post/:id",
    component: PostDetailsComponent,
    data: { animation: "isRight" }
  },
  { path: "category/:id", component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  RegisterComponent,
  PostDetailsComponent,
  CategoryComponent
];
