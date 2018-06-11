import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {WebglComponent} from './webgl/webgl.component';
import {AboutComponent} from './sections/about/about.component';
import {HomeComponent} from './sections/home/home.component';
import {NavbarMainComponent} from './components/navbar-main/navbar-main.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import { SocialMediaLinksComponent } from './components/social-media/social-media.component';

@NgModule({
    declarations: [
        AppComponent,
        WebglComponent,
        ContactFormComponent,
        AboutComponent,
        HomeComponent,
        NavbarMainComponent,
        SocialMediaLinksComponent,
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule.forRoot(),
    ],
    providers:    [],
    bootstrap:    [AppComponent]
})
export class AppModule {
}
