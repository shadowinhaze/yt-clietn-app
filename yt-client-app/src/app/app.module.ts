import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { FilterActivatorComponent } from './components/header/filter-activator/filter-activator.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { SearchResultsListComponent } from './components/search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import { SearchResultsItemMoreComponent } from './components/search-results-item-more/search-results-item-more.component';
import { FilterSortComponent } from './components/filter-sort/filter-sort.component';
import { LoginComponent } from './components/header/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    FilterActivatorComponent,
    UserAuthComponent,
    SearchResultsListComponent,
    SearchResultsItemComponent,
    SearchResultsItemMoreComponent,
    FilterSortComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
