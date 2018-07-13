import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TweenMax, TimelineMax, Ease, Power1, Bounce, Linear} from 'gsap';

@Component({
    selector:    'app-work-menu-item',
    templateUrl: './work-menu-item.component.html',
    styleUrls:   ['./work-menu-item.component.scss']
})
export class WorkMenuItemComponent implements OnInit {

    baseUrl: string;

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.baseUrl = this.router.url;
    }
}
