import { IndexPageComponent } from './pages/index-page/index-page.component';
import { OffersInteriorPageComponent } from './pages/offers-interior/offers-interior.component';
import { CertTermsPageComponent } from './pages/cert-terms/cert-terms.component';
import { SitemapPageComponent } from './pages/sitemap/sitemap.component';
import { TermsPageComponent } from './pages/terms/terms.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { DownloadAppPageComponent } from './pages/download-app/download-app.component';
import { OffersSignaturePageComponent } from './pages/offers-signatures/offers.component';
import { AllBannersComponent } from './pages/all-banners/all-banners.component';
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
import { PropertyPageComponent } from './pages/property/property.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { FAQPageComponent } from './pages/faq/faq.component';
import { howToComponent } from './pages/howto/howto.component';

const routes: Routes = [
  { path:  'offers', component:  OffersPageComponent},
  { path:  'faq', component:  FAQPageComponent},
  { path:  'howto', component:  howToComponent},
  { path:  'terms', component:  TermsPageComponent},
  { path:  'not-found', component:  NotFoundPageComponent},
  { path:  'contact', component:  ContactPageComponent},
  { path:  'download-app', component:  DownloadAppPageComponent},
  { path:  'offers-signature', component:  OffersSignaturePageComponent},
  { path:  'offers-interior', component:  OffersInteriorPageComponent},
  { path:  'search', component:  SearchPageComponent},
  { path:  'benefits', component:  BenefitsPageComponent},
  { path:  'outlet', component:  OutletPageComponent},
  { path:  'property', component:  PropertyPageComponent},
  { path:  'become-member', component:  MemberPageComponent},
  { path:  'blogs', component:  BlogsPageComponent},
  { path:  'blog-layout1', component:  BlogLayout1Component},
  { path:  'blog-layout2', component:  BlogLayout2Component},
  { path:  'blog-layout3', component:  BlogLayout3Component},
  { path:  'banners', component:  AllBannersComponent},
  { path:  'sitemap', component:  SitemapPageComponent},
  { path:  'cert-terms', component:  CertTermsPageComponent},
  { path: 'index-page', component: IndexPageComponent},
  { path:  '', component:  HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
