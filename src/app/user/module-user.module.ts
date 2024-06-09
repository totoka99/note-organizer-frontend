import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { userFeature } from './user-feature.constant';
import { UserEffects } from './store/user.effects';
import { userReducer } from './store/user.reducer';
import { SharedModule } from 'src/app/shared-module';
import { UserMenuComponent } from './component/user-menu/user-menu.component';
import { HeaderComponent } from './component/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../core/auth/jwt.interceptor';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForgottenPasswordComponent } from './component/forgotten-password/forgotten-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UserDetailsComponent,
    UserMenuComponent,
    HeaderComponent,
    ForgottenPasswordComponent,
    ResetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(userFeature, userReducer),
    EffectsModule.forFeature([UserEffects]),
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    LoginComponent,
    ForgottenPasswordComponent,
    RegistrationComponent,
    UserDetailsComponent,
    UserMenuComponent,
    HeaderComponent,
    ResetPasswordComponent,
    MatSidenavModule,
    NgIf,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class ModuleUserModule {}
