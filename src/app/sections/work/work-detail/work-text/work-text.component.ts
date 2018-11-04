import { log } from 'util';
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
  private viewportHeight = window.screen.height;
  // private viewportWidth = window.screen.width;
  private isInViewport = false;

  constructor() {}

  ngOnInit() {
    this.bgColor = this.detailData.background;
    this.viewportHeight = window.screen.height;
  }

  elementEnterViewport = (isInViewport, position, direction, el) => {
    const workTextElement = el.children[0];
    // console.log('YEAH I AM IN VIEWPORT!', isInViewport, this.title.nativeElement);
    // console.log(isInViewport, this.isInViewport, isInViewport !== this.isInViewport);
    // console.log('\n \n', isInViewport, el.children[0].getElementsByTagName('h2'));
    if (isInViewport) {
      this.showTextAnimation(workTextElement, isInViewport, position, direction);
    } else {
      this.hideTextAnimation(workTextElement, isInViewport, position, direction);
    }

    // if (isInViewport !== this.isInViewport) {
    //   this.isInViewport = isInViewport;
    //   // console.log('isInViewport', isInViewport);
    //   // console.log('this.isInViewport', this.isInViewport);

    //   if (this.isInViewport) {
    //     this.showTextAnimation(el);
    //   } else {
    //     this.hideTextAnimation(el);
    //   }
    //   console.log('------------------------------------');
    // }
  };

  showTextAnimation(el: any, value: boolean, position: number, direction: string) {
    if (value !== this.isInViewport) {
      this.isInViewport = value;
      // console.log('¿¿¿¿¿¿¿¿ showTextAnimation');
      TweenMax.set(el, {
        position: 'fixed',
        // top: '10%',
        autoAlpha: 0,
        // TODO make position dynamic
        top: this.viewportHeight / 3,
        overwrite: 'all'
      });
      TweenMax.to(el, 0.5, {
        autoAlpha: 1
      });
    }
  }

  hideTextAnimation(el: any, value: boolean, position: number, direction: string) {
    if (value !== this.isInViewport) {
      this.isInViewport = value;

      // console.log('******* hideTextAnimation');
      TweenMax.to(el, 0.3, {
        // position: 'static',
        autoAlpha: 0
        // top: -100
      });
      // TweenMax.set(el, {
      //   position: 'static',
      //   autoAlpha: 0,
      //   overwrite: 'all'
      // });
    }
  }

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
}
