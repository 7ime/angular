import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SmartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
