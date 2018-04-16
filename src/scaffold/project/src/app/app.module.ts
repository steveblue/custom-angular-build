import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing }       from './app.routes';
import { HomeModule } from './shared/components/home/home.module';
import { AwayModule } from './shared/components/away/away.module';

@NgModule({

    imports: [ BrowserModule,
               HomeModule,
               AwayModule,
               routing ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
