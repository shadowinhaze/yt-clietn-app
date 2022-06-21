// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// ================

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
// ================

// Components
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
// ================

@NgModule({
  declarations: [AuthFormComponent, AuthPageComponent],
  exports: [AuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
