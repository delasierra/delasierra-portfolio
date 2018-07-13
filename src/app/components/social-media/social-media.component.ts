import {Component, OnInit} from '@angular/core';
import {SocialMediaLinkModel, SocialMediaModel} from './social-media.model';
import {SocialMediaLinksService} from './social-media.service';

@Component({
    selector:    'app-social-media-links',
    templateUrl: './social-media.component.html',
    styleUrls:   ['./social-media.component.scss']
})
export class SocialMediaLinksComponent implements OnInit {

    data: SocialMediaModel
    // private linksData: SocialMediaLinkModel;

    constructor(private socialMediaLinksService: SocialMediaLinksService) {
    }

    ngOnInit() {
        this.data = this.socialMediaLinksService.getSocialMediaData();
        // this.linksData = this.data.links;
        console.log(this.data);
    }

}
