import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector:    'app-bg-canvas',
    templateUrl: './bg-canvas.component.html',
    styleUrls:   ['./bg-canvas.component.scss']
})
export class BgCanvasComponent implements OnInit {
    @ViewChild('bgCanvas') bgCanvas: ElementRef;
    public context: CanvasRenderingContext2D;

    constructor() {
    }

    ngOnInit() {
        console.log(window.screen.width, window.screen.height);


        // this.context = (<HTMLCanvasElement>this.bgCanvas.nativeElement).getContext('2d');
        //
        // let grd = this.context.createLinearGradient(window.screen.width / 2, 0, window.screen.width / 2, window.screen.height);
        // grd.addColorStop(0, "#cccccc");
        // grd.addColorStop(1, "#ff0000");
        //
        // this.context.fillStyle = grd;
        // this.context.fillRect(0, 0, window.screen.width, window.screen.height);
        //
        // // this.context.rect(0, 0, window.screen.width, window.screen.height);
        // // this.context.fill();
        //
        // this.draw();
    }

    // ngAfterViewInit(): void {
    // this.context = (<HTMLCanvasElement>this.bgCanvas.nativeElement).getContext('2d');
    // this.context.rect(20, 20, 1000, 1000);
    // this.context.fill();
    //
    // this.draw();
    // }

    private draw() {
        // this.context.beginPath();
        // this.context.moveTo(0, 0);
        // this.context.lineTo(300, 150);
        // this.context.stroke();
    }

}
