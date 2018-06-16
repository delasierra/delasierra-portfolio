import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBgStyle]'
})
export class BgStyleDirective {

    @Input('appBgStyle') bgInput: any;

    constructor(private el: ElementRef,
                private renderer: Renderer2) {
    }

    ngOnInit() {
        this.setBackgroundStyle(this.bgInput);
    }

    setBackgroundStyle(bg: string): void {
        if (bg.indexOf('#') < 0) {
            this.setBgCoverImage(bg);

        } else {
            this.getBgColorStyle(bg);
        }
    }

    setBgCoverImage(bg: string): void {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', 'url("' + bg + '")');
        this.renderer.setStyle(this.el.nativeElement, 'backgroundSize', 'cover');
    }

    getBgColorStyle(bg: string): void {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', bg);
    }

}
