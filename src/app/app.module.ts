import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { ArticleComponent } from './article/article.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { YouTubeService } from './services/youtube.service';
import { YouTubeSearchInjectables } from './youtube-search/youtube-search.injectables';

@NgModule({
  declarations: [
    AppComponent,
    VideoBoxComponent,
    FilterPipePipe,
    ArticleComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    YouTubeService,
    YouTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
