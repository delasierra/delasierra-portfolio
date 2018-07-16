import {Directive, ElementRef, Input} from '@angular/core';
import {TimelineMax} from 'gsap';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {map, filter} from 'rxjs/operators';
import {WorkService} from '../../sections/work/work.service';
import {SECTION} from '../../models/routing.model';

@Directive({
    selector: '[appBgStateColor]'
})
export class BgStateColorDirective {
    @Input('appBgStateColor') appBgStateColor: { color1: string, color2: string };

    tl = new TimelineMax();

    constructor(private router: Router,
                private workService: WorkService,
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

                if (section.indexOf(SECTION.workDetails) > -1) {
                    const workId = this.getWorkId(section);
                    this.updateBackground(SECTION.workDetails, workId);

                } else {
                    this.updateBackground(section.slice(section.indexOf('/') + 1));
                }
            });
    }

    private updateBackground(section: string, param?: string) {
        // if (this.stateColor) {
        //     this.setCustomColors(this.stateColor.color1, this.stateColor.color2);
        //
        // } else {
        // }
        this.setDefaultColors(section, param);
        this.tl.play();
    }


    private setDefaultColors(section: string, param?: string) {
        console.log('section', section, 'param', param);
        switch (section) {
            case 'work':
                this.tl
                    .to(this.el.nativeElement, 1, {
                        backgroundImage: 'linear-gradient(170deg, #e41d29, #3d3091)',
                        // backgroundImage: 'linear-gradient(170deg, #ffffff, #000000)',
                        overwrite:       'all'
                    });
                break;

            case 'about':
                this.tl
                    .to(this.el.nativeElement, 1, {
                        // backgroundImage: 'linear-gradient(170deg, #1f2024, #212227)',
                        backgroundImage: 'linear-gradient(170deg, #292a31, #212227)',
                        overwrite:       'all'
                    });
                break;

            case 'detail':
                const color = this.workService.getWorkCaseData(+param).general.mainColor;
                this.tl
                    .to(this.el.nativeElement, 1, {
                        backgroundImage: 'linear-gradient(170deg, ' + color + ', ' + color + ')',
                        overwrite:       'all'
                    });
                break;

            case 'home':
            default:
                this.tl
                    .to(this.el.nativeElement, 1, {
                        backgroundImage: 'linear-gradient(170deg, #292a31, #212227)',
                        overwrite:       'all'
                    });
                break;
        }
    }

    private setCustomColors(color1: string, color2: string) {
        // console.log('+++++++ this.stateColor = ', 'color1:', color1, 'color2:', color2);
        this.tl
            .to(this.el.nativeElement, 1, {
                backgroundImage: 'linear-gradient(170deg, ' + color1 + ', ' + color2 + ')',
                overwrite:       'all'
            });
    }

    // helpers
    private getWorkId(url: string): string {
        return url.slice(url.lastIndexOf('/') + 1);
    }
}
