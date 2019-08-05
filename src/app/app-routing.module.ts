import { SearchPageComponent } from './pages/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:  'search', component:  SearchPageComponent},
  { path:  '', component:  HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
