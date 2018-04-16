import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cmp-prefix1-app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  stealthMode: string;

  constructor() {
    this.stealthMode = 'inactive';
  }

  ngOnInit() {

    setTimeout(() => { this.stealthMode = 'active' }, 0);

  }

  ngOnDestroy() {

    this.stealthMode = 'inactive';

  }

}
