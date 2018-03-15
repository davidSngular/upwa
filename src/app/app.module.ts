import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserStateInterceptor} from '../interceptors/browser-state.interceptor';
import {DogsComponent} from '../components/dogs/dogs.component';
import {PostsComponent} from '../components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'upwa'}),
    HttpClientModule,
    AppRoutingModule,
    BrowserTransferStateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
