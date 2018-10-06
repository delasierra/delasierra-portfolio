import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {TweenMax, TimelineMax, Ease, Power2, Power0, Bounce, Linear} from 'gsap';

@Component({
    selector:    'app-work-menu-item2',
    templateUrl: './work-menu-item2.component.html',
    styleUrls:   ['./work-menu-item2.component.scss']
})
export class WorkMenuItem2Component implements OnInit {

    @ViewChild('menuItem') menuItemRef: ElementRef;

    constructor() {
    }

    ngOnInit() {
        console.log('teting init', this.menuItemRef);
        // const tl: TimelineMax = new TimelineMax({repeat: -1, yoyo: true});
        // // const item: any = this.menuItemRef.nativeElement;
        // tl.set(this.menuItemRef.nativeElement, {force3D: true})
        // // .set(this.menuItemRef.nativeElement, {x: 200})
        //     .set(this.menuItemRef.nativeElement, {borderBottomLeftRadius: '50%'})
        //     .to(this.menuItemRef.nativeElement, 5, {borderBottomLeftRadius: '50%', ease: Power2.easeIn, delay: 0.5})
        //     .to(this.menuItemRef.nativeElement, 5, {borderBottomLeftRadius: '80%', ease: Power0.easeNone})
        //     .to(this.menuItemRef.nativeElement, 5, {borderBottomLeftRadius: '0%', ease: Power0.easeNone})
        //     .to(this.menuItemRef.nativeElement, 5, {borderBottomLeftRadius: '80%', ease: Power0.easeNone});
        //
        // tl.play();
    }

}
