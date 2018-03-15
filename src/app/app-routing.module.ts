import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DogsComponent} from '../components/dogs/dogs.component';
import {PostsComponent} from '../components/posts/posts.component';

const routes: Routes = [
  {path: 'dogs', component: DogsComponent},
  {path: 'posts', component: PostsComponent},
  {
    path: '',
    redirectTo: '/dogs',
    pathMatch: 'full'
  },
  { path: '**', component: DogsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
