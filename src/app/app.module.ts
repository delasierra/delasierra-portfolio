import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WebglComponent} from './webgl/webgl.component';
import {ContactComponent} from './sections/contact/contact.component';
import {AboutComponent} from './sections/about/about.component';
import {HomeComponent} from './sections/home/home.component';
import {NavbarMainComponent} from './components/navbar-main/navbar-main.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        WebglComponent,
        ContactComponent,
        AboutComponent,
        HomeComponent,
        NavbarMainComponent
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers:    [],
    bootstrap:    [AppComponent]
})
export class AppModule {
}
