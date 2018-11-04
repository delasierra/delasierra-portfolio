import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgStyle]'
})
export class BgStyleDirective implements OnInit {
  @Input('appBgStyle')
  bgInput: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setBackgroundStyle(this.bgInput);
  }

  setBackgroundStyle(bg: string): void {
    if (bg.indexOf('#') < 0) {
      this.setBgCoverImage(bg);
    } else {
      this.setBgColorStyle(bg);
    }
  }

  setBgCoverImage(bg: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', 'url("' + bg + '")');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundSize', 'cover');
  }

  setBgColorStyle(bg: string): void {
    // console.log('setBgColorStyle', bg);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', bg);
  }
}
