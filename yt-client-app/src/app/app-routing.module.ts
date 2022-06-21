import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { Path } from './shared/constants/shared-constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: Path.main,
    pathMatch: 'full',
  },
  {
    path: Path.main,
    loadChildren: () =>
      import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: Path.auth,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: Path.admin,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: Path.notFound,
    pathMatch: 'full',
    component: NotFoundPageComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: Path.notFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
