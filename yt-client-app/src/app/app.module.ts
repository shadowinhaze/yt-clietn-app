import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
// ================

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
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
import { ReduceNumberPipe } from './pipes/reduce-number.pipe';
import { CardBorderColorDirective } from './directives/border-color.directive';
import { DataService } from './services/data.service';
import { SortDataService } from './services/sort-data-service';
import { FilterDataService } from './services/filter-data-service';
import { DirectionIconDirective } from './directives/direction-icon.directive';

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
    ReduceNumberPipe,
    CardBorderColorDirective,
    DirectionIconDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [DataService, SortDataService, FilterDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
