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


import { SettingComponent } from './pro/setting/setting.component';
import { LeftsideComponent } from './pro/leftside/leftside.component';
import { RightsideComponent } from './pro/rightside/rightside.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LeftComponent } from './profile/left/left.component';
import { LeftdocumentaionComponent } from './profile/leftdocumentaion/leftdocumentaion.component';
import { RightComponent } from './profile/right/right.component';
import { SkillComponent } from './skill/skill.component';
import { LeftinfoComponent } from './skill/leftinfo/leftinfo.component';
import { RightinfoComponent } from './skill/rightinfo/rightinfo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    SudentComponent,
    TestprimengComponent,
    SettingComponent,
    LeftsideComponent,
    RightsideComponent,
    ProfileComponent,
    LeftComponent,
    LeftdocumentaionComponent,
    RightComponent,
    SkillComponent,
    LeftinfoComponent,
    RightinfoComponent
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
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
