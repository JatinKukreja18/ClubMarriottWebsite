import { OffersPageComponent } from './pages/offers/offers.component';
import { BlogLayout3Component } from './pages/blog-layout3/blog-layout3.component';
import { BlogLayout1Component } from './pages/blog-layout1/blog-layout1.component';
import { MemberPageComponent } from './pages/member/member.component';
import { BlogsPageComponent } from './pages/blogs/blogs.component';
import { OutletPageComponent } from './pages/outlet/outlet.component';
import { BenefitsPageComponent } from './pages/benefits/benefits.component';
import { SearchPageComponent } from './pages/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { BlogLayout2Component } from './pages/blog-layout2/blog-layout2.component';

const routes: Routes = [
  { path:  'offers', component:  OffersPageComponent},
  { path:  'search', component:  SearchPageComponent},
  { path:  'benefits', component:  BenefitsPageComponent},
  { path:  'outlet', component:  OutletPageComponent},
  { path:  'become-member', component:  MemberPageComponent},
  { path:  'blogs', component:  BlogsPageComponent},
  { path:  'blog-layout1', component:  BlogLayout1Component},
  { path:  'blog-layout2', component:  BlogLayout2Component},
  { path:  'blog-layout3', component:  BlogLayout3Component},
  { path:  '', component:  HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
