import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LiveViewComponent } from './pages/live-view/live-view.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProjectComponent } from './pages/project/project.component';
import { MePageComponent } from './pages/me-page/me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuComponent,
    LiveViewComponent,
    SubjectsComponent,
    ProfileComponent,
    BlogComponent,
    GalleryComponent,
    ProjectComponent,
    MePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
