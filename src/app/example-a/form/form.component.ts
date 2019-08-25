import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // this.router.navigate(['../exampleA', {outlets: {exampleA_list: null}}]);
  }

  teste() {
    this.router.navigate(['/exampleA/page', { outlets: { exampleA_list: 'exampleA', exampleA_form: null } }]);

    console.log('teste')
  }
}
