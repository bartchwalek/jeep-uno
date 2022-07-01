import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {LiveViewComponent} from './pages/live-view/live-view.component';
import {SubjectsComponent} from './pages/subjects/subjects.component';
import {BlogComponent} from './pages/blog/blog.component';
import {GalleryComponent} from "./pages/gallery/gallery.component";


const routes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'live', component: LiveViewComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
