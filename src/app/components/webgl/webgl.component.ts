import {WebglService} from './webgl.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector:    'app-webgl',
    templateUrl: './webgl.component.html',
    styleUrls: ['./webgl.component.scss']
})
export class WebglComponent implements OnInit {
    private canEleId = 'renderCanvas';

    constructor(private engServ: WebglService) {
    }

    ngOnInit() {
        this.engServ.createScene(this.canEleId);
        this.engServ.animate();

        // let tm:TimelineMax = new TimelineMax ();
    }

}
