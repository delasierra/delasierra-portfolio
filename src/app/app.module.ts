import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AboutComponent} from './sections/about/about.component';
import {HomeComponent} from './sections/home/home.component';
import {NavbarMainComponent} from './components/navbar-main/navbar-main.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import { SocialMediaLinksComponent } from './components/social-media/social-media.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {WebglComponent} from './components/webgl/webgl.component';
import { BgStateColorDirective } from './directives/attributes/bg-state-color.directive';

@NgModule({
    declarations: [
        AppComponent,
        WebglComponent,
        ContactFormComponent,
        AboutComponent,
        HomeComponent,
        NavbarMainComponent,
        SocialMediaLinksComponent,
        BgStateColorDirective,
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule.forRoot(),
        AngularFontAwesomeModule,
    ],
    providers:    [],
    bootstrap:    [AppComponent]
})
export class AppModule {
}
