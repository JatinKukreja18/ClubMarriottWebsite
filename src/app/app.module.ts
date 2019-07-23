import { HomePageComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPageComponent } from './pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { HeaderCtasComponent } from './components/header/header-ctas/header-ctas.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HeaderComponent,
    HomePageComponent,
    NavigationComponent,
    HeaderCtasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
