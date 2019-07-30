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
    HomeBenefitsContainerComponent,
    OwlCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
