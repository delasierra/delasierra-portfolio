import { Component, Input, OnInit } from '@angular/core';
import { WorkGeneralData, WorkTextData } from '../../models/work-data.model';
import { ResponsiveSizeInfoDirective, ResponsiveSizeInfoRx } from 'ngx-responsive';
import { Observable } from 'rxjs/index';

declare var TweenMax: any;

@Component({
  selector: 'app-work-text',
  templateUrl: './work-text.component.html',
  styleUrls: ['./work-text.component.scss']
})
export class WorkTextComponent implements OnInit {
  @Input()
  generalData: WorkGeneralData;
  @Input()
  detailData: WorkTextData;

  private bgColor: string;
  private viewportHeight: number;
  private viewportWidth: number;
  private isInViewport = false;

  constructor() {}

  ngOnInit() {
    this.bgColor = this.detailData.background;
    this.viewportHeight = window.screen.height;
    this.viewportWidth = window.screen.width;
  }

  elementEnterViewport = (isInViewport, position, direction, el) => {
    // elementInViewPort directive callback
    const workTextElement = el.children[0];
    // console.log('YEAH I AM IN VIEWPORT!', isInViewport, this.title.nativeElement);
    // console.log(isInViewport, this.isInViewport, isInViewport !== this.isInViewport);
    // console.log('\n \n', isInViewport, el.children[0].getElementsByTagName('h2'));
    // if (this.isInViewport !== isInViewport && !this.isSmallDevice()) {
    if (this.isInViewport !== isInViewport && !this.isSmallDevice()) {
      this.isInViewport = isInViewport;

      if (isInViewport) {
        // this.showTextAnimation(workTextElement, isInViewport, position, direction);
        this.showTextAnimation(workTextElement, position, direction);
      } else {
        // this.hideTextAnimation(workTextElement, isInViewport, position, direction);
        this.hideTextAnimation(workTextElement, position, direction);
      }
    }
  };

  // showTextAnimation(el: any, value: boolean, position: number, direction: string) {
  showTextAnimation(el: any, position: number, direction: string) {
    // if (value !== this.isInViewport) {
    // this.isInViewport = value;
    console.log('¿¿¿¿¿¿¿¿ showTextAnimation');

    TweenMax.set(el, {
      position: 'fixed',
      autoAlpha: 0,
      // TODO: make position dynamic
      // TODO: make animation related to scoll direction
      top: this.viewportHeight / 3,
      overwrite: 'all'
    });

    TweenMax.to(el, 0.5, {
      autoAlpha: 1
    });
    // }
  }

  // hideTextAnimation(el: any, value: boolean, position: number, direction: string) {
  hideTextAnimation(el: any, position: number, direction: string) {
    // if (value !== this.isInViewport) {
    // this.isInViewport = value;
    console.log('******* hideTextAnimation');
    TweenMax.to(el, 0.3, {
      autoAlpha: 0
    });
    // }
  }

  // Styles
  getBgColor(): any {
    const bgColor = this.detailData.background
      ? this.detailData.background
      : this.generalData.mainColor;
    return bgColor;
  }

  getContainerStyles(): object {
    return {
      'align-items': this.detailData.position,
      padding: this.detailData.position === 'center' ? '0 50px' : ''
    };
  }

  getTitleStyles(): object {
    return {
      color: this.getTitleColor(this.bgColor),
      'border-bottom-color': this.getTitleColor(this.bgColor),
      'text-align': this.detailData.position
    };
  }

  getParagraphStyles(): object {
    return {
      color: this.getTParagraphColor(this.bgColor),
      'text-align': this.detailData.position
    };
  }

  getTitleColor(color: string): any {
    if (color === '#ffffff') {
      return this.generalData.mainColor;
    }
  }

  getTParagraphColor(color: string): any {
    if (color !== '#ffffff') {
      return '#ffffff';
    }
  }

  // Helpers
  isSmallDevice(): boolean {
    return this.viewportWidth <= 539;
  }
}
