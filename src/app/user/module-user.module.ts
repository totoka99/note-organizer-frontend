import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { userFeature } from './user-feature.constant';
import { UserEffects } from './store/user.effects';
import { userReducer } from './store/user.reducer';
import { SharedModule } from 'src/app/shared-module';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { HeaderComponent } from './header/header.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UserDetailsComponent,
    UserMenuComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(userFeature, userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    UserDetailsComponent,
    UserMenuComponent,
    HeaderComponent
  ],
  providers: []
})
export class ModuleUserModule {}
