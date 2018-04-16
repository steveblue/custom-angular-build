import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cmp-prefix1-app-lazy',
  templateUrl: 'away.component.html',
  styleUrls: ['away.component.css']
})

export class AwayComponent implements OnInit, OnDestroy {

  angularMode: string;

  constructor() {
    this.angularMode = 'inactive';
  }

  ngOnInit() {

    setTimeout(() => { this.angularMode = 'active' }, 0);

  }

  ngOnDestroy() {

    this.angularMode = 'inactive';

  }

}
