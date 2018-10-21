import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-img',
  templateUrl: './responsive-img.component.html',
  styleUrls: ['./responsive-img.component.scss']
})
export class ResponsiveImgComponent implements OnInit {
  @Input()
  folder: string;
  @Input()
  image: string;

  isVector: boolean;

  constructor() {}

  ngOnInit() {
    this.isVector = false;
  }

  getImage(size: string = '', dpi: string = ''): string {
    // console.log(this.folder + dpi + size + '/');
    return this.folder + dpi + size + '/';
  }
}
