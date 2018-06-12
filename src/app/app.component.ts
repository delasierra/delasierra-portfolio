import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';


@Component({
    selector:    'app-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor(private router: Router) {
        router.events.subscribe(event => {

            // todo implement this listener to change body color with animation service
            if (event instanceof NavigationEnd) {
                console.log('NavigationEnd:', event);
            }

            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
}
