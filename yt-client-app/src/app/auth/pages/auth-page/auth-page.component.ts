import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Path } from 'src/app/shared/constants/shared-constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'yt-auth-page',
  templateUrl: './auth-page.component.html',
})
export class AuthPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.auth.userChange.subscribe((status) => {
      if (status) this.router.navigate([Path.home, Path.main]);
    });
  }

  onFormSubmitAction(value: string) {
    this.auth.logIn(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
