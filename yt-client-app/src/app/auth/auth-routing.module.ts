import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from '../shared/constants/shared-constants';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Paths.signIn,
  },
  {
    path: Paths.signIn,
    component: AuthPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
