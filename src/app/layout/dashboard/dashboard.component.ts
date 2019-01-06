import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text: 'Optional text here, any colour you like'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Optional text here, any colour you like'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text: 'Optional text here, any colour you like'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `push success`
            },
            {
                id: 2,
                type: 'warning',
                message: `push warning`
            }
        );
    }

    ngOnInit() {
    }

    /*public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }*/
}
