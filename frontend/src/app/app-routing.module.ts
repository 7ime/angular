import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBasicsComponent } from './pages/page-basics/page-basics.component';
import { PageApiComponent } from './pages/page-api/page-api.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';


const routes: Routes = [
  {
    path: '',
    component: PageBasicsComponent
  },
  {
    path: 'api',
    component: PageApiComponent
  },
  {
    path: 'api/:id',
    component: PagePostComponent
  }, 
  {
    path: 'error',
    component: PageErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
