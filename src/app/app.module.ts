import { DropdownCategoryComponent } from './components/dropdown-category/dropdown-category.component';
import { HotelSearchCardComponent } from './components/hotel-search-card/hotel-search-card.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchPageComponent } from './pages/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionTextComponent } from './components/footer/section-text/section-text.component';
import { CarouselType3Component } from './components/carousel-type3/carousel-type3.component';
import { HomeLastContainerComponent } from './containers/home-last-section/last-container.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { HomeMembershipContainerComponent } from './containers/home-membership/home-membership-containercomponent';
import { HomeBenefitsContainerComponent } from './containers/home-benefits/home-benefits-containercomponent';
import { HomeExperiencesContainerComponent } from './containers/home-experience/home-experiences-containercomponent';
import { RichTextLargeComponent } from './components/rich-text-large/rich-text-large.component';
import { BannerTypeCtaComponent } from './components/banner-type-cta/banner-type-cta.component';
import { TeasersListComponent } from './components/teasers-list/teasers-list.component';
import { TeasersContainerComponent } from './containers/home-teasers/teasers-container.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomePageComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPageComponent } from './pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { HeaderCtasComponent } from './components/header/header-ctas/header-ctas.component';
import { RichTextComponent } from './components/rich-text/rich-text.component';
import { CarouselType2Component } from './components/carousel-type2/carousel-type2.component';
import { OwlCarouselComponent } from './components/owl-carousel/owl-carousel.component';
import { LinksListComponent } from './components/footer/links-list/links-list.component';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { DropdownType2Component } from './components/dropdown-type2/dropdown-type2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HeaderComponent,
    HomePageComponent,
    NavigationComponent,
    HeaderCtasComponent,
    CarouselComponent,
    TeasersContainerComponent,
    TeasersListComponent,
    RichTextComponent,
    BannerTypeCtaComponent,
    RichTextLargeComponent,
    HomeExperiencesContainerComponent,
    CarouselType2Component,
    CarouselType3Component,
    HomeBenefitsContainerComponent,
    OwlCarouselComponent,
    HomeMembershipContainerComponent,
    MemberFormComponent,
    HomeLastContainerComponent,
    LinksListComponent,
    SectionTextComponent,
    FooterComponent,
    SearchPageComponent,
    DropdownComponent,
    SearchBannerComponent,
    SearchResultsComponent,
    HotelSearchCardComponent,
    DropdownType2Component,
    DropdownCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
