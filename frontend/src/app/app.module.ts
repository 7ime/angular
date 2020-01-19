import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { ButtonComponent } from './button/button.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifehooksComponent } from './lifehooks/lifehooks.component';
import { LifehooksParentComponent } from './lifehooks-parent/lifehooks-parent.component';
import { AppDataService } from './services/app-data.service';
import { SmartComponent } from './smart/smart.component';
import { WorkApiComponent } from './work-api/work-api.component';
import { PageApiComponent } from './pages/page-api/page-api.component';
import { PageBasicsComponent } from './pages/page-basics/page-basics.component';
import { HeaderComponent } from './header/header.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PipeComponent,
    ButtonComponent,
    ParentComponent,
    ChildComponent,
    LifehooksComponent,
    LifehooksParentComponent,
    SmartComponent,
    WorkApiComponent,
    PageApiComponent,
    PageBasicsComponent,
    HeaderComponent,
    PagePostComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
