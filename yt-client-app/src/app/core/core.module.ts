// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
// ================

// Components
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { LoginComponent } from './components/header/login/login.component';
import { FilterSortComponent } from './components/filter-sort/filter-sort.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// ================

@NgModule({
  declarations: [
    HeaderComponent,
    FilterSortComponent,
    SearchInputComponent,
    LoginComponent,
    NotFoundPageComponent,
  ],
  exports: [HeaderComponent],
  imports: [RouterModule, CommonModule, SharedModule, FormsModule],
})
export class CoreModule {}
