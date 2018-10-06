import {Directive, ElementRef, Input, OnInit} from '@angular/core';
// import {TweenLite} from 'gsap';

@Directive({
    selector: '[appScrollSmooth]'
})
export class ScrollSmoothDirective implements OnInit {
    @Input('appScrollSmooth') appScrollSmooth;

    html: any = document.documentElement;
    body: any = document.body;
    scroller = {
        target:        this.el.nativeElement,
        ease:          0.05, // <= scroll speed
        endY:          0,
        y:             0,
        resizeRequest: 1,
        scrollRequest: 0,
    };

    requestId = null;


    constructor(private el: ElementRef) {
    }

    ngOnInit() {

        // console.log('******* ')
        // TweenLite.set(this.scroller
        //
        //         .target
        //     , {
        //         rotation: 0.01
        //         ,
        //         force3D:  true
        //     }
        // )
        // ;
        // this.updateScroller();
        // window.focus();
        // window.addEventListener('resize', this.onResize);
        // document.addEventListener('scroll', this.onScroll);
    }

    // updateScroller() {
    //     console.log('updateScroller', this.html.scrollTop, this.body.scrollTop);
    //     const resized = this.scroller.resizeRequest > 0;
    //
    //     if (resized) {
    //         const height = this.scroller.target.clientHeight;
    //         this.body.style.height = height + 'px';
    //         this.scroller.resizeRequest = 0;
    //     }
    //
    //     const scrollY = window.pageYOffset || this.html.scrollTop || this.body.scrollTop || 0;
    //     // const scrollY = window.pageYOffset || 0;
    //
    //     this.scroller.endY = scrollY;
    //     this.scroller.y += (scrollY - this.scroller.y) * this.scroller.ease;
    //
    //     if (Math.abs(scrollY - this.scroller.y) < 0.05 || resized) {
    //         this.scroller.y = scrollY;
    //         this.scroller.scrollRequest = 0;
    //     }
    //
    //     TweenLite.set(this.scroller.target, {
    //         y: -this.scroller.y
    //     });
    //
    //     this.requestId = this.scroller.scrollRequest > 0 ? requestAnimationFrame(this.updateScroller) : null;
    // }

    // onScroll() {
    //     this.scroller.scrollRequest++;
    //     if (!this.requestId) {
    //         this.requestId = requestAnimationFrame(this.updateScroller);
    //     }
    // }

    // onResize() {
    //     this.scroller.resizeRequest++;
    //     if (!this.requestId) {
    //         this.requestId = requestAnimationFrame(this.updateScroller);
    //     }
    // }

}
