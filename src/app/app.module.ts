import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './sections/about/about.component';
import { HomeComponent } from './sections/home/home.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SocialMediaLinksComponent } from './components/social-media/social-media.component';

import { WebglComponent } from './components/webgl/webgl.component';
import { BgStateSolidColorDirective } from './directives/attributes/bg-state-solid-color.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactFormExpandableComponent } from './components/contact-form-expandable/contact-form-expandable.component';
import { BgCanvasComponent } from './components/bg-canvas/bg-canvas.component';
import { BgStateColorCanvasDirective } from './directives/attributes/bg-state-color-canvas.directive';
import { BgStateGradientColorDirective } from './directives/attributes/bg-state-gradient-color';
import { ShowHideElementDirective } from './directives/attributes/show-hide-home-elements.directive';
import { SharedModule } from './shared/shared.module';
import { ScrollSmoothDirective } from './directives/animations/scroll-smooth.directive';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    WebglComponent,
    ContactFormComponent,
    AboutComponent,
    HomeComponent,
    NavbarMainComponent,
    SocialMediaLinksComponent,
    ContactFormExpandableComponent,
    BgCanvasComponent,
    BgStateColorCanvasDirective,
    BgStateSolidColorDirective,
    BgStateGradientColorDirective,
    ShowHideElementDirective,
    ScrollSmoothDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
