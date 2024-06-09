import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './notes/components/create-note/create-note.component';
import { NoteDetailsComponent } from './notes/components/note-details/note-details.component';
import { NoteListComponent } from './notes/components/note-list/note-list.component';
import { LoginComponent } from './user/component/login/login.component';
import { RegistrationComponent } from './user/component/registration/registration.component';
import { NoteMenuComponent } from './notes/components/note-menu/note-menu.component';
import { ForgottenPasswordComponent } from './user/component/forgotten-password/forgotten-password.component';
import { ResetPasswordComponent } from './user/component/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '', // Empty path indicates the root URL
    redirectTo: '/login', // Redirect to the '/home' route as the default
    pathMatch: 'full' // This ensures a full URL match for the redirection
  },
  {
    path: 'notes',
    children: [
      {
        path: 'note-menu',
        component: NoteMenuComponent,
        children: [
          {
            path: 'create-note',
            component: CreateNoteComponent
          },
          {
            path: 'note-list',
            component: NoteListComponent
          },
          { path: ':id', component: NoteDetailsComponent }
        ]
      }
    ]
  },
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent
  },
  {
    path: 'reset-password/:pwResetCode',
    component: ResetPasswordComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
