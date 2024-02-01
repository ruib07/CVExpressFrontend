import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomePageComponent } from '../components/HomePage/HomePage.component';
import { UserRegisterComponent } from '../components/Authentication/User-Register/User-Register.component';
import { UserLoginComponent } from '../components/Authentication/User-Login/User-Login.component';
import { UserEditInfoComponent } from '../components/UserProfile/User-EditInfo/User-EditInfo.component';
import { UserAddHabilitationsComponent } from '../components/UserProfile/User-AddHabilitations/User-AddHabilitations.component';
import { UserAddExperienceComponent } from '../components/UserProfile/User-AddExperience/User-AddExperience.component';
import { MainNavComponent } from '../shared/main-nav/main-nav.component';
import { LoginNavComponent } from '../shared/login-nav/login-nav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProfilesNavComponent } from '../shared/profiles-nav/profiles-nav.component';
import { HabilitationsComponent } from '../components/Habilitations/Habilitations.component';
import { ExperiencesComponent } from '../components/Experiences/Experiences.component';
import { RecoverPasswordComponent } from '../components/Authentication/RecoverPassword/RecoverPassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserRegisterComponent,
    UserLoginComponent,
    RecoverPasswordComponent,
    UserEditInfoComponent,
    UserAddHabilitationsComponent,
    UserAddExperienceComponent,
    HabilitationsComponent,
    ExperiencesComponent,
    MainNavComponent,
    LoginNavComponent,
    ProfilesNavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    FontAwesomeModule,
    MdbCollapseModule,
    ToastrModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
