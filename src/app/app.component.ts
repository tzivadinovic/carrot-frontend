import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {IMenuItem} from "../@types/IMenuItem";
import {adminMenu, userMenu} from '../util/pageMenuItems';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'carrot-frontend';
    @ViewChild('sidenav', {static: false}) sidenav: MatSidenav | undefined;
    menuItems: IMenuItem[] = [];
    opened: boolean = false;
    user: string = 'admin';

    ngDoCheck(): void {
        if (window.location.pathname === '' || window.innerWidth < 600) {
            this.opened = false;
        } else {
            this.opened = true;
            this.menuItems = userMenu;
        }
        if (this.user == 'admin') {
            this.menuItems = adminMenu;
        } else {
            this.menuItems = userMenu;
        }
    }

    ngOnInit(): void {
    }

    logout(): void {
    }
}
