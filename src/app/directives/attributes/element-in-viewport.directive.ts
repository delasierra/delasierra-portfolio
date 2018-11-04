import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appElementinViewportDirective]'
})
export class ElementInViewportDirective implements OnInit, OnDestroy {
  @Input('appElementinViewportDirective')
  callBack;
  // @HostListener('scroll', ['$event'])
  // onScroll(event) {
  //   console.log('is in viewport?', this.isElementInViewport());
  //   console.log('scroll', event);
  // }
  viewportHeight: number;
  viewportWidth: number;
  scrollPos = 0;

  constructor(private el: ElementRef) {
    this.viewportHeight = window.screen.height;
    this.viewportWidth = window.screen.width;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true); // third parameter
  }

  isElementInViewport() {
    const elBounding = this.getElementPosition();
    // console.log(
    //   '\n \nDATA',
    //   elBounding.top,
    //   elBounding.y,
    //   elBounding.height,
    //   this.viewportHeight / 1.5
    // );
    return (
      elBounding.top <= this.viewportHeight / 5 && elBounding.bottom >= this.viewportHeight / 5
      // elBounding.top <= 1400 && elBounding.bottom >= this.viewportHeight / 3
    );
  }

  onScroll = (): void => {
    this.callBack(
      this.isElementInViewport(),
      this.getElementPosition(),
      this.getScrollingDirection(),
      this.el.nativeElement
    );
  };

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  getScrollingDirection() {
    let direction;
    if (this.getElementPosition().top > this.scrollPos) {
      direction = 'UP';
    } else {
      direction = 'DOWN';
    }
    this.scrollPos = this.getElementPosition().top;
    return direction;
  }

  getElementPosition(): any {
    // console.log(this.el.nativeElement);
    return this.el.nativeElement.getBoundingClientRect();
  }
}
