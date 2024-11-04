import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { PillComponent } from './components/pill/pill.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { InfoComponent } from './components/info/info.component';
import { InfoIIComponent } from './components/info-ii/info-ii.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { FactsComponent } from './components/facts/facts.component';
import { CTAComponent } from './components/cta/cta.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { FadeAnimationComponent } from './components/fade-animation/fade-animation.component';
import { HoverAnimationComponent } from './components/hover-animation/hover-animation.component';
import { ContainerComponent } from './components/container/container.component';
import { ContentComponent } from './components/content/content.component';
import { TextComponent } from './components/text/text.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    PillComponent,
    LayoutComponent,
    HeroComponent,
    FeaturesComponent,
    InfoComponent,
    InfoIIComponent,
    SpecialitiesComponent,
    FactsComponent,
    CTAComponent,
    InstagramComponent,
    FadeAnimationComponent,
    HoverAnimationComponent,
    ButtonComponent,
    ContainerComponent,
    ContentComponent,
    TextComponent,
    WrapperComponent,
    HeaderComponent,
    FooterComponent,
    HeroCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
