import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // isActive = false;
  /*showPlusAirports = true;
  showPlusPanels = true;
  showMenu = '';
  showMenu3 = '';
  selectedAirport: any;
  selectedPanel: any;*/

  clients = [{idx: '1', name: 'Aeroporto 1*****1', location: 'Londra', signs: '78'},
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

  signs = [{idx: '1', code: 'Panel Kelsey', client: 'Aeroporto 1*****1'},
    {idx: '2', code: 'Panel Daphne', client: 'Aeroporto 2*****2'},
    {idx: '3', code: 'Panel Niles', client: 'Aeroporto 3*****3'},
    {idx: '4', code: 'Panel Bulldog', client: 'Aeroporto 11*****11'},
    {idx: '5', code: 'Panel Martin', client: 'Aeroporto 5*****5'},
    {idx: '6', code: 'Panel Roz', client: 'Aeroporto 6*****6'},
    {idx: '7', code: 'Panel Frederick', client: 'Aeroporto 7*****7'},
    {idx: '8', code: 'Panel Whatever', client: 'Aeroporto 2*****2'},
    {idx: '9', code: 'Supersupersupersupersupersupersupersuperlongname', client: 'Aeroporto 3*****3'},
    {idx: '10', code: 'Panel Lilith', client: 'Aeroporto 4*****4'},
    {idx: '11', code: 'Panel Jameson', client: 'Aeroporto 11*****11'},
    {idx: '12', code: 'Panel Woody', client: 'Aeroporto 6*****6'},
    {idx: '13', code: 'Panel Controversial', client: 'Aeroporto 13*****13'}];

  constructor(public router: Router) {
    this.router.events.subscribe(val => {

    });
  }

  /*airportClicked(airport) {
      this.selectedAirport = airport;
      console.log('ooooooooooo5 ' + airport.name);
      // this.router.navigate(['/airport', airport.name]);
  }

  airportColor(airport) {
      if (airport === this.selectedAirport) {
          return 'cyan';
      }
  }

  panelClicked(panel) {
      this.selectedPanel = panel;
  }

  panelColor(panel) {
      if (panel === this.selectedPanel) {
          return 'cyan';
      }
  }

  listClick(event, newValue) {
      console.log(newValue);
      this.selectedItem = newValue;  // don't forget to update the model here
      // ... do other stuff here ...
  }*/

  showClients() {
    this.router.navigate(['/clients']);
  }

  showSigns() {
    this.router.navigate(['/signs']);
  }

  showCharacters() {
    // this.router.navigate(['/airports']);
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }
}
