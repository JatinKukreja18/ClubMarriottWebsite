import { MemberPageComponent } from './pages/member/member.component';
import { BlogsPageComponent } from './pages/blogs/blogs.component';
import { OutletPageComponent } from './pages/outlet/outlet.component';
import { BenefitsPageComponent } from './pages/benefits/benefits.component';
import { SearchPageComponent } from './pages/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:  'search', component:  SearchPageComponent},
  { path:  'benefits', component:  BenefitsPageComponent},
  { path:  'outlet', component:  OutletPageComponent},
  { path:  'become-member', component:  MemberPageComponent},
  { path:  'blogs', component:  BlogsPageComponent},
  { path:  '', component:  HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
