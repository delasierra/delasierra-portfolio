import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector:    'app-close-btn',
    templateUrl: './close-btn.component.html',
    styleUrls:   ['./close-btn.component.scss']
})
export class CloseBtnComponent implements OnInit {

    @Input() bgColor: string;

    constructor() {
    }

    ngOnInit() {
    }
}
