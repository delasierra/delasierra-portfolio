import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter, map} from 'rxjs/internal/operators';
import {SECTION} from '../../models/routing.model';

declare var TweenMax: any;

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
        // this.router.events
        //     .pipe(
        //         filter((e: RouterEvent): e is NavigationEnd => e instanceof NavigationEnd),
        //         map(section => {
        //             return section.url;
        //         })
        //     )
        //     .subscribe(section => {
        //
        //         if (section.indexOf(SECTION.home) > -1 || section.length <= 1) {
        //             this.showHideElement();
        //         } else {
        //             this.showHideElement();
        //         }
        //     });
    }

}
