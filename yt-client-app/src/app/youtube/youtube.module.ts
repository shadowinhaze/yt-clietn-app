import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
// ================

// Components
import { SearchResultsListComponent } from './components/search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import { SearchResultsItemMoreComponent } from './components/search-results-item-more/search-results-item-more.component';
import { SharedModule } from '../shared/shared.module';
// ================

@NgModule({
  declarations: [
    SearchResultsListComponent,
    SearchResultsItemComponent,
    SearchResultsItemMoreComponent,
  ],
  exports: [
    SearchResultsListComponent,
    SearchResultsItemComponent,
    SearchResultsItemMoreComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class YoutubeModule {}
