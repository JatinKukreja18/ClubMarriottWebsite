import { LivechatComponent } from './components/livechat/livechat.component';
import { SitemapPageComponent } from './pages/sitemap/sitemap.component';
import { TermsPageComponent } from './pages/terms/terms.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { FormDropdownComponent } from './components/form-dropdown/form-dropdown.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { DownloadAppPageComponent } from './pages/download-app/download-app.component';
import { OffersSignaturePageComponent } from './pages/offers-signatures/offers.component';
import { AutocompleteDropdownComponent } from './components/autocomplete-dropdown/autocomplete-dropdown.component';
import { MemberSectionComponent } from './components/member-section/member-section.component';
import { CardComponent } from './components/cm-card/cm-card.component';
import { CardAccordionItemComponent } from './components/card-accordion-section/card-accordion-item/card-accordion-item.component';
import { CardAccordionSectionComponent } from './components/card-accordion-section/card-accordion-section.component';
import { BannerFiveComponent } from './components/banner-5/banner-5.component';
import { CardListSectionComponent } from './components/card-list-section/card-list-section.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { PropertyPageComponent } from './pages/property/property.component';
import { BannerFourComponent } from './components/banner-4/banner-4.component';
import { BannerTwoComponent } from './components/banner-2/banner-2.component';
import { BlogLayout3Component } from './pages/blog-layout3/blog-layout3.component';
import { BlogLayout2Component } from './pages/blog-layout2/blog-layout2.component';
import { BlogLayout1Component } from './pages/blog-layout1/blog-layout1.component';
import { BlogThumbnailComponent } from './components/blog-thumbnail/blog-thumbnail.component';
import { BlogsPageComponent } from './pages/blogs/blogs.component';
import { MemberPageComponent } from './pages/member/member.component';
import { MemberFormSectionComponent } from './components/member-form-section/member-form.component';
import { SearchComponent } from './components/search/search.component';
import { AppCtasComponent } from './components/app-ctas/app-ctas.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SimpleBannerComponent } from './components/simple-banner/simple-banner.component';
import { OutletPageComponent } from './pages/outlet/outlet.component';
import { BenefitsHotelsContainerComponent } from './containers/benefits-hotels/benefits-hotels-container.component';
import { BenefitsSearchContainerComponent } from './containers/benefits-search/benefits-search-container.component';
import { CarouselType4Component } from './components/carousel-type4/carousel-type4.component';
import { BannerComponent } from './components/banner/banner.component';
import { BenefitsPageComponent } from './pages/benefits/benefits.component';
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
import { HomeBenefitsContainerComponent } from './containers/home-benefits/home-benefits-container.component';
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
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { PropertiesDetailsComponent } from './components/address/properties-details.component';
import { OffersPageComponent } from './pages/offers/offers.component';
import { AllBannersComponent } from './pages/all-banners/all-banners.component';
import { BannerThreeComponent } from './components/banner-3/banner-3.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FAQPageComponent } from './pages/faq/faq.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';

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
    CarouselType4Component,
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
    AutocompleteComponent,
    DropdownCategoryComponent,
    BenefitsPageComponent,
    BannerComponent,
    BenefitsSearchContainerComponent,
    BenefitsHotelsContainerComponent,
    OutletPageComponent,
    SimpleBannerComponent,
    PropertiesDetailsComponent,
    SubscriptionComponent,
    AppCtasComponent,
    SearchComponent,
    MemberFormSectionComponent,
    MemberPageComponent,
    BlogsPageComponent,
    BlogThumbnailComponent,
    BlogLayout1Component,
    BlogLayout2Component,
    BlogLayout3Component,
    OffersPageComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    BannerFourComponent,
    BannerFiveComponent,
    AllBannersComponent,
    PropertyPageComponent,
    SocialLinksComponent,
    CardListSectionComponent,
    CardAccordionSectionComponent,
    CardAccordionItemComponent,
    CardComponent,
    MemberSectionComponent,
    AutocompleteDropdownComponent,
    OffersSignaturePageComponent,
    DownloadAppPageComponent,
    ContactPageComponent,
    ContactFormComponent,
    FormDropdownComponent,
    NotFoundPageComponent,
    FAQPageComponent,
    TermsPageComponent,
    CardCarouselComponent,
    SitemapPageComponent,
    LivechatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
