import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../components/HomePage/HomePage.component';
import { UserRegisterComponent } from '../components/Authentication/User-Register/User-Register.component';
import { UserLoginComponent } from '../components/Authentication/User-Login/User-Login.component';
import { UserEditInfoComponent } from '../components/UserProfile/User-EditInfo/User-EditInfo.component';
import { UserAddHabilitationsComponent } from '../components/UserProfile/User-AddHabilitations/User-AddHabilitations.component';
import { UserAddExperienceComponent } from '../components/UserProfile/User-AddExperience/User-AddExperience.component';
import { HabilitationsComponent } from '../components/Habilitations/Habilitations.component';
import { ExperiencesComponent } from '../components/Experiences/Experiences.component';
import { RecoverPasswordGetEmailComponent } from '../components/Authentication/RecoverPassword-GetEmail/RecoverPassword-GetEmail.component';
import { RecoverPasswordComponent } from '../components/Authentication/RecoverPassword/RecoverPassword.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

const routes: Routes = [
  {
    path: 'HomePage',
    component: HomePageComponent,
  },
  {
    path: 'Authentication/User-Register',
    component: UserRegisterComponent,
  },
  {
    path: 'Authentication/User-Login',
    component: UserLoginComponent,
  },
  {
    path: 'Authentication/RecoverPassword-GetEmail',
    component: RecoverPasswordGetEmailComponent,
  },
  {
    path: 'Authentication/:email/RecoverPassword',
    component: RecoverPasswordComponent,
  },
  {
    path: 'UserProfile/User-EditInfo',
    component: UserEditInfoComponent,
  },
  {
    path: 'UserProfile/User-AddHabilitations',
    component: UserAddHabilitationsComponent,
  },
  {
    path: 'UserProfile/User-AddExperience',
    component: UserAddExperienceComponent,
  },
  {
    path: 'Habilitations',
    component: HabilitationsComponent,
  },
  {
    path: 'Experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '**',
    redirectTo: 'HomePage',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
