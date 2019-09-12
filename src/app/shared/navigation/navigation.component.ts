import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  testeA() {
    this.router.navigate(['/exampleA/page',{ outlets: { exampleA_form: 'exampleA', exampleA_list:null } }]);
  }

  testeB() {
    this.router.navigate(['/exampleB/page',{ outlets: { exampleB_form: 'exampleB', exampleB_list:null } }]);
  }

  testeC() {
    this.router.navigate(['/exampleC/page',{ outlets: { exampleC_form: 'exampleC', exampleC_list:null } }]);
  }
}
