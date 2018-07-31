import {Injectable} from '@angular/core';
import {AboutSectionData, HomeSectionData} from '../models/app-data.model';
import {ContactSectionData} from '../components/contact-form/contact-form.model';
import {SocialMediaModel} from '../components/social-media/social-media.model';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class AppService {

    private appContentData: any = require('../../assets/data/app-content.json');

    // private appStatus$: Observable;

    constructor() {
    }

    ngOnInit() {
        // this.appStatus$ = Observable.create(observer => {
        //     const source =
        // })
        // this.router.events
        // // .pipe()
        //     .subscribe(event => {
        //         if (event instanceof NavigationEnd) {
        //         this.getAppStatusColor(event);
        //             // console.log('NavigationEnd:', event);
        //         }
        //     });
    }

    public getHomeData(): HomeSectionData {
        return this.appContentData.home;
    }

    public getAboutData(): AboutSectionData {
        return {
            title:   this.appContentData.about.title,
            bio:     this.appContentData.about.bio,
            contact: this.appContentData.contact
        };
    }

    public getContactData(): ContactSectionData {
        return this.appContentData.contact;
    }

    public getSocialMediaData(): SocialMediaModel {
        return this.appContentData.socialMedia;
    }
}
