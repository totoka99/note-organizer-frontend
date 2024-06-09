import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { logoutUserAction } from '../../store/user.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() public inUser!: User;

  constructor(private store: Store) {}

  ngOnInit(): void {}
  onClickLogout() {
    this.store.dispatch(logoutUserAction());
  }
}
