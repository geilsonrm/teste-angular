import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  teste() {
    this.router.navigate(['/exampleA/page',{ outlets: { exampleA_form: 'exampleA', exampleA_list:null } }]);

    console.log('teste');
  }
}
