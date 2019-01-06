import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {routerTransition} from '../../router.animations';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [routerTransition()]
})

export class ClientsComponent implements OnInit {

  page: any;
  queryComplete = false;
  pageSize = 10;
  // query = '';

  // isLoading = true;
  clients = [];

  constructor(private router: ActivatedRoute) {
    console.log('');
  }

  ngOnInit() {
    this.clients = [{idx: '1', name: 'Aeroporto 1*****1', location: 'Londra', signs: '78'},
      {idx: '2', name: 'Aeroporto 2*****2', location: 'Parigi', signs: '96'},
      {idx: '3', name: 'Aeroporto 3*****3', location: 'Anchorage', signs: '128'},
      {idx: '4', name: 'Aeroporto 4*****4', location: 'Pechino', signs: '11'},
      {idx: '5', name: 'Aeroporto 5*****5', location: 'Genova', signs: '87'},
      {idx: '6', name: 'Aeroporto 6*****6', location: 'Los Angeles', signs: '321'},
      {idx: '7', name: 'Aeroporto 7*****7', location: 'New York', signs: '5'},
      {idx: '8', name: 'Aeroporto 8*****8', location: 'Milano', signs: '96'},
      {idx: '9', name: 'Aeroporto 9*****9', location: 'Roma', signs: '128'},
      {idx: '10', name: 'Aeroporto 10*****10', location: 'Città del Messico', signs: '11'},
      {idx: '11', name: 'Aeroporto 11*****12', location: 'Francoforte', signs: '87'},
      {idx: '12', name: 'Aeroporto 13*****13', location: 'Bogotà', signs: '321'},
      {idx: '13', name: 'Aeroporto 14*****14', location: 'Amsterdam', signs: '5'}];

    this.queryComplete = true;
  }

  createClient() {
  }


  getClients() {
  }

  handleError(e) {
    this.login();
  }

  editClient(client) {
  }

  addClient() {
  }

  openClient(client) {
  }

  deleteClient(client) {
  }

  login() {
    // this.authService.logout();
  }

}
