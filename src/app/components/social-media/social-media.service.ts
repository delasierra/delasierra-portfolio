import {Injectable} from '@angular/core';
import {AppService} from '../../app.service';
import {SocialMediaLinkModel, SocialMediaModel} from './social-media.model';

@Injectable({
    providedIn: 'root'
})
export class SocialMediaLinksService {

    constructor(private appService: AppService) {
    }

    getSocialMediaData(): SocialMediaModel{
        return this.appService.getSocialMediaData();
    }

    getLinks(): SocialMediaLinkModel {
        return this.getSocialMediaData().links;
    }
}
