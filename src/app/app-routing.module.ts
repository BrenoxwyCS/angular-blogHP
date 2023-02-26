import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
// path vazio acessar o HomeComponent
  {
    path: 'content/:id',
    component: ContentComponent
  }
  // path /content acessar o ContentComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
