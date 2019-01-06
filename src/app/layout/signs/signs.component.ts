import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';

// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-signs',
    templateUrl: './signs.component.html',
    styleUrls: ['./signs.component.scss'],
    animations: [routerTransition()]
})

export class SignsComponent implements OnInit {

    page: any;
    // isLoading = true;
    queryComplete = false;
    screenSigns = [];
    querySigns = [];
    pageSize = 10;
    clientQuery = '';
    typeQuery = '';
    projectQuery = '';
    deletionBuffer = [];

    constructor(private router: Router) {
    }

    setClickedRow(record) {
        this.deletionBuffer.indexOf(record) === -1 ? this.deletionBuffer.push(record) : this.remove(record);
    }

    remove(record) {
        for (let i = 0; i < this.deletionBuffer.length; i++) {
            if (this.deletionBuffer[i].idx === record.idx) {
                this.deletionBuffer.splice(i, 1);
            }
        }
    }

    ngOnInit() {
        this.getSigns();
        // this.router.params.subscribe(params =>
        //   this.handle(params['airportIdentifier']));
    }

    getSigns() {
        this.querySigns = [{idx: '1', type: 'LIGS', project: 'project1', client: 'Aeroporto 1*****1'},
            {idx: '2', type: 'LIGS', project: 'project2', client: 'Aeroporto 2*****2'},
            {idx: '3', type: 'LIMS', project: 'project3', client: 'Aeroporto 3*****3'},
            {idx: '4', type: 'LIGS', project: 'project4', client: 'Aeroporto 11*****11'},
            {idx: '5', type: 'LIMS', project: 'project3', client: 'Aeroporto 5*****5'},
            {idx: '6', type: 'LIGS', project: 'project2', client: 'Aeroporto 6*****6'},
            {idx: '7', type: 'LIMS', project: 'project1', client: 'Aeroporto 7*****7'},
            {idx: '8', type: 'LIGS', project: 'project2', client: 'Aeroporto 2*****2'},
            {
                idx: '9',
                type: 'LIMS',
                project: 'project2',
                client: 'Aeroporto 3*****3'
            },
            {idx: '10', type: 'LIMS', project: 'project3', client: 'Aeroporto 4*****4'},
            {idx: '11', type: 'LIMS', project: 'project4', client: 'Aeroporto 11*****11'},
            {idx: '12', type: 'LIMS', project: 'project3', client: 'Aeroporto 6*****6'},
            {idx: '13', type: 'LIGS', project: 'project2', client: 'Aeroporto 13*****13'},
            {idx: '21', type: 'LIMS', project: 'project1', client: 'Aeroporto 2*****2'},
            {idx: '31', type: 'LIGS', project: 'project6', client: 'Aeroporto 3*****3'},
            {idx: '41', type: 'LIMS', project: 'project2', client: 'Aeroporto 11*****11'},
            {idx: '51', type: 'LIMS', project: 'project9', client: 'Aeroporto 5*****5'},
            {idx: '61', type: 'LIGS', project: 'project9', client: 'Aeroporto 6*****6'},
            {idx: '71', type: 'LIGS', project: 'project4', client: 'Aeroporto 7*****7'},
            {idx: '81', type: 'LIGS', project: 'project6', client: 'Aeroporto 2*****2'},
            {
                idx: '91',
                type: 'LIGS',
                project: 'project4',
                client: 'Aeroporto 3*****3'
            },
            {idx: '101', type: 'LIMS', project: 'project6', client: 'Aeroporto 4*****4'},
            {idx: '111', type: 'LIGS', project: 'project7', client: 'Aeroporto 11*****11'},
            {idx: '121', type: 'LIMS', project: 'project1', client: 'Aeroporto 6*****6'},
            {idx: '131', type: 'LIGS', project: 'project5', client: 'Aeroporto 13*****13'}];

        this.screenSigns = this.querySigns;
        this.queryComplete = true;
    }

    handleError(e) {
        // this.login();
    }

    placeholder() {
        // return 'try me';
    }

    search(clientQuery, typeQuery, projectQuery) {

        console.log(this.page);

        this.page = 1;

        this.clientQuery = clientQuery.trim();
        this.typeQuery = typeQuery.trim();
        this.projectQuery = projectQuery.trim();

        const clientKey = 'client';
        const bufferClient = (this.querySigns || []).filter((item) =>
            clientKey.split(',').some(keyz =>
                item.hasOwnProperty(keyz) && new RegExp(clientQuery, 'gi').test(item[keyz])));

        const typeKey = 'type';
        const bufferType = (bufferClient || []).filter((item) =>
            typeKey.split(',').some(keyz =>
                item.hasOwnProperty(keyz) && new RegExp(typeQuery, 'gi').test(item[keyz])));

        const projectKey = 'project';
        const bufferProject = (bufferType || []).filter((item) =>
            projectKey.split(',').some(keyz =>
                item.hasOwnProperty(keyz) && new RegExp(projectQuery, 'gi').test(item[keyz])));

        this.screenSigns = bufferProject;
    }

    editSign(sign) {
    }

    deleteSign(sign) {
    }

    deleteSelected() {
        this.deletionBuffer.forEach(function(element) {
            console.log(element);
        });
    }

    addSign() {
        this.router.navigate(['/steps']);
    }
}

