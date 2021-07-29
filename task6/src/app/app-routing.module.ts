import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:"profile",component:ProfileComponent},
  {path:"setting",component:SkillComponent},
  {path:"editProfile",component:EditprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
