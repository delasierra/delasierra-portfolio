import {Directive, ElementRef, Input, OnInit} from '@angular/core';
// import {TimelineMax} from 'gsap';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {WorkService} from '../../sections/work/work.service';
import {filter, map} from 'rxjs/internal/operators';
import {SECTION} from '../../models/routing.model';

@Directive({
    selector: '[appBgStateColorCanvas]'
})
export class BgStateColorCanvasDirective implements OnInit {
    @Input('appBgStateColorCanvas') appBgStateColorCanvas: { color1: string, color2: string };

    // tl = new TimelineMax();
    context: CanvasRenderingContext2D;

    constructor(private router: Router,
                private workService: WorkService,
                private el: ElementRef) {
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
        //         if (section.indexOf(SECTION.workDetails) > -1) {
        //             const workId = this.getWorkId(section);
        //             this.updateBackground(SECTION.workDetails, workId);
        //
        //         } else {
        //             this.updateBackground(section.slice(section.indexOf('/') + 1));
        //         }
        //     });
        //
        // this.context = (<HTMLCanvasElement>this.el.nativeElement).getContext('2d');
        // this.createBg();
    }


    // createBg() {
    //
    //     let grd = this.context.createLinearGradient(window.screen.width / 2, 0, window.screen.width / 2, window.screen.height);
    //     grd.addColorStop(0, "#cccccc");
    //     grd.addColorStop(1, "#ff0000");
    //
    //     this.context.fillStyle = grd;
    //     this.context.fillRect(0, 0, window.screen.width, window.screen.height);
    // }


    // private updateBackground(section: string, param?: string) {
    //     // if (this.stateColor) {
    //     //     this.setCustomColors(this.stateColor.color1, this.stateColor.color2);
    //     //
    //     // } else {
    //     // }
    //     this.setDefaultColors(section, param);
    //     this.tl.play();
    // }

    // var ctx = document.getElementById("canvas").getContext("2d");

    // update() {
    //     this.context.rect(20, 20, 150, 100);
    //     this.context.fill();
    // }

// returns a random integer in a range
//     random(min: number, max: number): number {
//         return (min + Math.random() * (max - min) + 0.5) | 0;
//     }


    // tweenToRandomColor() {
    //     console.log('--- tweenToRandomColor')
    //     TweenLite.to(this.context, 1, {
    //         colorProps: {fillStyle: 'rgb(' + this.random(0, 255) + ',' + this.random(0, 255) + ',' + this.random(0, 255) + ')'},
    //         onUpdate:   this.update,
    //         onComplete: this.tweenToRandomColor
    //     });
    // }


    // private setDefaultColors(section: string, param?: string) {
    //     console.log('section 22', section, 'param', param, this.context);
    //
    //     switch (section) {
    //         case 'work':
    //             let grd2 = this.context.createLinearGradient(window.screen.width / 2, 0, window.screen.width / 2, window.screen.height);
    //             grd2.addColorStop(0, "#0000ff");
    //             grd2.addColorStop(1, "#00f100");
    //
    //
    //             // TweenLite.to(ctx, 1, {colorProps:{fillStyle:"rgb(" + random(0,255) + "," + random(0,255) + "," +
    //             // random(0,255) + ")"},
    //
    //             // this.tl
    //             //     .to(this.context, 1, {
    //             //         // colorProps: 'fillStyle: ' + grd + '',
    //             //         colorProps: {fillStyle: '#00ff00'},
    //             //         // colorProps: {fillStyle: "rgb(" + this.random(0, 255) + "," + this.random(0, 255) + "," +
    //             //         // this.random(0, 255) + ")"}, // backgroundImage: 'linear-gradient(170deg, #ffffff,
    //             // #000000)', overwrite:  'all' });
    //
    //
    //             // }
    //             //         this.tl.to(this.context, 1,
    //             //             {colorProps: {fillStyle: 'rgb( 255, 100, 40)'}});
    //
    //             // }
    //             TweenLite.to(this.context, 1, {
    //                 colorProps: {fillStyle: 'rgb( 255, 100, 40)'},
    //                 onUpdate:   this.update,
    //                 // onComplete: tweenToRandomColor
    //             });
    //
    //
    //             // this.tweenToRandomColor();
    //             break;
    //
    //         case
    //         'about'
    //         :
    //             this.tl
    //                 .to(this.el.nativeElement, 1, {
    //                     // backgroundImage: 'linear-gradient(170deg, #1f2024, #212227)',
    //                     // backgroundImage: 'linear-gradient(170deg, #292a31, #212227)',
    //                     backgroundImage: 'linear-gradient(170deg, #1f2025, #212227)',
    //                     overwrite:       'all'
    //                 });
    //             break;
    //
    //         case
    //         'detail'
    //         :
    //             const color = this.workService.getWorkCaseData(param).general.mainColor;
    //             this.tl
    //                 .to(this.el.nativeElement, 1, {
    //                     backgroundImage: 'linear-gradient(170deg, ' + color + ', ' + color + ')',
    //                     overwrite:       'all'
    //                 });
    //             break;
    //
    //         case
    //         'home'
    //         :
    //         default:
    //             this.tl
    //                 .to(this.el.nativeElement, 1, {
    //                     backgroundImage: 'linear-gradient(170deg, #292a31, #212227)',
    //                     overwrite:       'all'
    //                 });
    //             break;
    //     }
    // }


    // private setCustomColors(color1: string, color2: string) {
    //     // console.log('+++++++ this.stateColor = ', 'color1:', color1, 'color2:', color2);
    //     this.tl
    //         .to(this.el.nativeElement, 1, {
    //             backgroundImage: 'linear-gradient(170deg, ' + color1 + ', ' + color2 + ')',
    //             overwrite:       'all'
    //         });
    // }

// helpers
//     private getWorkId(url: string): string {
//         return url.slice(url.lastIndexOf('/') + 1);
//     }
}
