import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './notes/components/create-note/create-note.component';
import { NoteDetailsComponent } from './notes/components/note-details/note-details.component';
import { NoteListComponent } from './notes/components/note-list/note-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  {
    path: 'notes',
    children: [
      { path: 'create-note', component: CreateNoteComponent },
      { path: 'note-list', component: NoteListComponent },
      { path: ':id', component: NoteDetailsComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
