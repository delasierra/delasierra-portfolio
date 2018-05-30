import {Injectable} from '@angular/core';
import {WorkModule} from './work.module';

@Injectable({
    providedIn: WorkModule
})
export class WorkService {

    private workList: Array<object> = [
        {
            id: 19,
            general: {
                mainColor: 0xff0000,
                mainImg: 'projectid/img/test.png',
                logo: 'projectid/img/logo.svg',
                title: 'Project title',
                description: 'Project description: Lorem ipsum dolor sit amet.',
                hastags: [
                    'webgl',
                    'Angular',
                    'Responsive'
                ]
            },
            screens: {
                home: {},
                projectData: {
                    description: 'Project DETAILED description: Lorem ipsum dolor sit amet.',
                    role: 'Role text',
                    credits: 'Credits text',
                    platforms: 'Platforms text'
                },

            }
        }
    ];

    constructor() {
    }

    // TODO add functions to fetch work section data
    getWorkDetailList(): Array<object> {
        return null;
    }

    getWorkDetails(id: number): object {
        const workList: Array<object> = this.getWorkDetailList();
        for (let i = 0; i < workList.length; i++) {
            // TODO get object from JSON
        }
        return null;
    }
}
