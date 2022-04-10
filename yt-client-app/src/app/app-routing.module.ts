import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInGuard } from './auth/guards/sign-in.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { Paths } from './shared/constants/shared-constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: Paths.main,
    pathMatch: 'full',
  },
  {
    path: Paths.main,
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canLoad: [AuthGuard],
  },
  {
    path: Paths.auth,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [SignInGuard],
  },
  {
    path: Paths.notFound,
    pathMatch: 'full',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: `/${Paths.notFound}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
