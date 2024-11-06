import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';
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
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';


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
    AboutComponent,
    MenuComponent,
    MotivationComponent,
    BlogComponent,
    BlogDetailComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
