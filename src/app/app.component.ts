import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
    selector:    'app-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent {

    window: Element;
    // isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            // Scroll to top if accessing a page, not via browser history stack
            if (event instanceof NavigationEnd) {
                const contentContainer = document.querySelector('.sections') || this.window;
                contentContainer.scrollTo(0, 0);
            }
        });
    }
}
