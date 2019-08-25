import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('oia');
    this.router.events.subscribe(value => {
      console.log('current route: ', this.router.url.toString());
    });
  }
  
}
