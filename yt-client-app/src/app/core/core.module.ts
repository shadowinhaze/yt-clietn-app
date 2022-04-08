import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Components
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { FilterActivatorComponent } from './components/header/filter-activator/filter-activator.component';
import { LoginComponent } from './components/header/login/login.component';
import { FilterSortComponent } from './components/filter-sort/filter-sort.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterSortComponent,
    SearchInputComponent,
    FilterActivatorComponent,
    LoginComponent,
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
})
export class CoreModule {}
