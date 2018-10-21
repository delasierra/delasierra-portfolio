import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  WorkGeneralData,
  WorkImageTextData,
  WorkImgData,
  WorkTextData
} from '../../models/work-data.model';

// declare var TweenMax: any;

@Component({
  selector: 'app-work-image-text',
  templateUrl: './work-image-text.component.html',
  styleUrls: ['./work-image-text.component.scss']
})
export class WorkImageTextComponent implements OnInit {
  @Input()
  generalData: WorkGeneralData;

  @Input()
  detailData: WorkImageTextData;

  @Input()
  workId: string;

  // @ViewChild('title', { read: ElementRef })
  // title: ElementRef;

  constructor() {}

  ngOnInit() {}

  isEvenLayout(): boolean {
    return this.detailData.layout === 'even';
  }

  // Text component
  getTextLayout(): string {
    if (this.isEvenLayout()) {
      return 'text-left-layout';
    } else {
      return 'text-right-layout';
    }
  }

  getMainLayout(): string {
    if (this.detailData.position === 'left') {
      return 'left-layout';
    } else {
      return 'right-layout';
    }
  }

  getBgColor(): any {
    const bgColor = this.detailData.background
      ? this.detailData.background
      : this.generalData.mainColor;
    return bgColor;
  }

  // getTextStyles(): object {
  //   // const textStyles: WorkTextData = {
  //   //   position = this.detailData.position;
  //   //   textStyles.background = this.detailData.background;
  //   // }

  //   const textStyles: object = {
  //     background: 'red',
  //     height: '2000px'
  //   };
  //   // textStyles .= this.detailData.background;
  //   return textStyles;
  // }

  // elementEnterViewport = (value, el) => {
  //   const workText = el;
  //   console.log('workText', workText);

  //   // console.log('YEAH I AM IN FIEWPORT!', value, this.title.nativeElement);
  //   if (value) {
  //     TweenMax.to(el, 5, {
  //       className: 'fixed-element',
  //       overwrite: 'all'
  //     });
  //   }
  // };

  // Images component
  getImagesLayout(): string {
    if (this.isEvenLayout()) {
      return 'col-md-6';
    } else {
      return 'col-md-8';
    }
  }

  getImageStyles(): any {
    // const images = this.detailData.images;
    // const position =
    const imgStyles: WorkImgData = {
      // position:   'center',
      position: this.detailData.position,
      layout: this.detailData.layout,
      background: this.detailData.background,
      images: this.detailData.images,
      fx: this.detailData.images.fx
    };
    // console.log(this.detailData.images);
    // return this.detailData;
    return imgStyles;
  }
}
