import {Component, HostListener, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';

// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
    animations: [routerTransition()]
})

export class StepsComponent implements OnInit {

    model = {
        left: true,
        middle: false,
        right: false
    };

    // page: any;
    isCompleted = false;
    data = {email: 'item@xxx.org'};
    projectArray: any;
    newSign: any;
    // isValid: Boolean;
    step1OK: Boolean;
    step2OK: Boolean;

    constructor(private router: Router) {
        /*this.router.events.subscribe(val => {
            console.log('00000000000000000000000000000000   ' + val);
            console.log('tttttttttttttttttttttttttttttttt   ' + val[0]);

            if (val instanceof NavigationStart) {
                console.log('111111111111111111111111111111111111111111111111111111111111111111111111111   ' + val.url);
                // this.router.navigate(['/' + val.url]);

            }

            if (val instanceof NavigationEnd) {
                console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            } else {
                // this.ngOnInit();
                console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
            }
        });*/
    }

    ngOnInit() {
        /*this.router.params.subscribe( params =>
                            console.log(params['xxx']));*/

        this.newSign = {
            color: '',
            quantity: '',
            project: '',
            type: 'LIGS',
            informationSign: '', // TRUE INFORMATION, FALSE MANDATORY
            leftRight: true,
            oneTwoSides: true,
            size: false,
            todo1: true,
            todo3: '',
            todo4: false,
            todo5: '',
        };

        // this.step1OK = false;
        this.step2OK = false;

        this.projectArray = [{id: '1', projectName: 'AAAAAAAAAAAA'}, {id: '2', projectName: 'BBBBBBBBBBBBBBBBBB'}];
    }

    isLIGS(): Boolean {
        return this.newSign.type === 'LIGS';
    }

    isInformationSign(): Boolean {
        return this.newSign.informationSign;
    }

    onProjectChange(event) {
        console.log('event: ' + event);
    }

    onMandatoryInformationChange(event) {
        this.step2OK = true;
        console.log('event: ' + event);
        console.log(' this.newSign.informationSign: ' + this.newSign.informationSign);
    }

    onStep1Next() {
        console.log('newSign.color: ' + this.newSign.color);
        console.log('newSign.quantity: ' + this.newSign.quantity);
        console.log('newSign.type: ' + this.newSign.type);
        console.log('newSign.project: ' + this.newSign.project);
    }

    onStep2Next() {
        console.log('11111111: ' + this.newSign.informationSign);
        console.log('222222222: ' + this.newSign.leftRight);
        console.log('3333333333: ' + this.newSign.oneTwoSides);
        console.log('444444444444: ' + this.newSign.size);
    }

    onStep3Next(event) {
        console.log('onStep3NextonStep3NextonStep3NextonStep3NextonStep3NextonStep3NextonStep3Next');
    }

    onComplete(event) {
        console.log('onCompleteonCompleteonCompleteonCompleteonCompleteonComplete');
    }

    finishFunction() {
    }

    hasUnsavedData(): Boolean {
        return this.newSign.project !== '';
    }

    @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
        if (this.hasUnsavedData()) {
            $event.returnValue = true;
        }
    }

}
