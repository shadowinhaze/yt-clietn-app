import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthComponent } from './components/user-auth/user-auth.component';

@NgModule({
  declarations: [UserAuthComponent],
  exports: [UserAuthComponent],
  imports: [CommonModule],
})
export class AuthModule {}
