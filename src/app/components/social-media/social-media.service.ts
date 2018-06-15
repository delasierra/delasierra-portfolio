import {Injectable} from '@angular/core';
import {SocialMediaLinkModel, SocialMediaModel} from './social-media.model';
import {AppService} from '../../services/app.service';

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
