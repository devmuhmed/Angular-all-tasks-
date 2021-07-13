import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //After run it in terminal npm install ng2-validation --save
import { CustomFormsModule } from 'ng2-validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudentComponent } from './students/sudent/sudent.component';
import { TestprimengComponent } from './testprimeng/testprimeng.component';
import {PasswordModule} from 'primeng/password'; //add input password from primeng
import {RatingModule} from 'primeng/rating';
import {ChipsModule} from 'primeng/chips';


@NgModule({
  declarations: [
    AppComponent,
    SudentComponent,
    TestprimengComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PasswordModule,
    RatingModule,
    ChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
