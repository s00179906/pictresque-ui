import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UploadComponent } from "./components/upload/upload.component";
import { ModelcontentComponent } from "./components/modelcontent/modelcontent.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostDetailsComponent } from "./pages/post-details/post-details.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PixbayPostsComponent } from "./components/pixbayposts/pixbayposts.component";
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angularx-social-login";
import { RegisterComponent } from "./pages/register/register.component";
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("771480609961730")
  }
]);
import { HighlightDirective } from "./directives/highlight.directive";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CategoryComponent } from "./pages/category/category.component";
import { SearchComponent } from "./components/search/search.component";
import { SearchModalComponent } from "./components/search-modal/search-modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FollowingComponent } from "./pages/following/following.component";
import { FilterPostsComponent } from "./components/filter-posts/filter-posts.component";
import { PostDateFiltererComponent } from "./components/post-date-filterer/post-date-filterer.component";
import { StoreModule } from "@ngrx/store";
import { PictresqueReducer } from "./store/reducers/pictresque.reducer";
import { PictresqueEffects } from "./store/effects/pictresque.effects";
import { EffectsModule } from "@ngrx/effects";

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    UploadComponent,
    ModelcontentComponent,
    PostsComponent,
    PostDetailsComponent,
    PixbayPostsComponent,
    HighlightDirective,
    CategoriesComponent,
    CategoryComponent,
    RegisterComponent,
    SearchComponent,
    SearchModalComponent,
    FollowingComponent,
    FilterPostsComponent,
    PostDateFiltererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    DragDropModule,
    SocialLoginModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      pictresque: PictresqueReducer
    }),
    EffectsModule.forRoot([PictresqueEffects])
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  // ? ADD ANY NGBS MODAL COMPONENTS HERE
  entryComponents: [ModelcontentComponent, SearchModalComponent]
})
export class AppModule {}
