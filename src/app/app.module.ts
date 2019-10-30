import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from './components/upload/upload.component';
import { ModelcontentComponent } from './components/modelcontent/modelcontent.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PixbayPostsComponent } from './components/pixbayposts/pixbayposts.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from 'angularx-social-login';
import { RegisterComponent } from './pages/register/register.component';
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('771480609961730')
  }
]);

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
    PixbayPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    DragDropModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModelcontentComponent, RegisterComponent]
})
export class AppModule {}
