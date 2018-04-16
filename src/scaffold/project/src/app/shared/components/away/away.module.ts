import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { CommonModule }  from '@angular/common';
import { AwayComponent } from './away.component';

@NgModule({
  imports:      [ RouterModule,
                  CommonModule ],
  declarations: [ AwayComponent ],
  exports: [ AwayComponent ]
})

export class AwayModule {}
