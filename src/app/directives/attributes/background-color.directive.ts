import {Directive, ElementRef, Input} from '@angular/core';
import {TimelineMax} from 'gsap';
import {NavigationEnd, Router} from '@angular/router';

@Directive({
    selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
    // @Input('appBackgroundColor') backgroundColor: string;
    @Input('appBackgroundColor') backgroundColor: { color1: string, color2: string };

    tl = new TimelineMax();

    constructor(private router: Router,
                private el: ElementRef) {
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.updateBackground(event.url);
                // console.log('NavigationEnd:', event);
            }
        });
    }

    private updateBackground(section: string) {
        // this.el.nativeElement.style.backgroundColor = color;
        if (this.backgroundColor) {
            this.setCustomColors(this.backgroundColor.color1, this.backgroundColor.color2);

        } else {
            this.setDefaultColors(section);
        }
        this.tl.play();
    }


    private setDefaultColors(section) {
        switch (section) {
            case '/work':
                this.tl
                    .to(this.el.nativeElement, 1, {
                        backgroundImage: 'linear-gradient(170deg, #e41d29, #3d3091)',
                        overwrite:       'all'
                    });
                break;

            case '/':
            case '/home':
            case '/about':
                this.tl
                    .to(this.el.nativeElement, 1, {
                        backgroundImage: 'linear-gradient(170deg, #292a31, #35363f)',
                        overwrite:       'all'
                    });
                break;
        }
    }

    private setCustomColors(color1: string, color2: string) {
        // console.log('+++++++ this.backgroundColor = ', 'color1:', color1, 'color2:', color2);
        this.tl
            .to(this.el.nativeElement, 1, {
                backgroundImage: 'linear-gradient(170deg, ' + color1 + ', ' + color2 + ')',
                overwrite:       'all'
            });
    }
}
