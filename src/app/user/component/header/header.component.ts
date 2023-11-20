import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../user.interface';
import { userSelectorV2 } from '../../store/user.selector';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  user$: Observable<User | null>;
  constructor(private store: Store) {
    this.user$ = store.select(userSelectorV2);
  }
  ngOnInit(): void {}
}
