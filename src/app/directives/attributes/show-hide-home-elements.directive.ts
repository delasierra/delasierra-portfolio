import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {filter, map} from 'rxjs/internal/operators';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {SECTION} from '../../models/routing.model';

declare var TweenMax: any;

@Directive({
    selector: '[appShoHideElement]'
})
export class ShowHideElementDirective implements OnInit{

    @Input('appShoHideElement') appShoHideElement;

    constructor(private router: Router,
                private el: ElementRef) {
    }

    ngOnInit() {
        this.router.events
            .pipe(
                filter((e: RouterEvent): e is NavigationEnd => e instanceof NavigationEnd),
                map(section => {
                    return section.url;
                })
            )
            .subscribe(section => {
                if (section.indexOf(SECTION.home) > -1 || section.length <= 1) {
                    this.showHideLogo(0);
                } else {
                    this.showHideLogo(1);
                }
            });
    }

    showHideLogo(value: number) {
        if (this.el.nativeElement.style.opacity !== value) {
            TweenMax.to(this.el.nativeElement, .5, {
                opacity:     value,
                overwrite: 'all'
            });
        }
    }

}
