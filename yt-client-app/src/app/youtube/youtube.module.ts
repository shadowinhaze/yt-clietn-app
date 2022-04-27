// Angular Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
// ================

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SharedModule } from '../shared/shared.module';
// ================

// Components
import { SearchResultsListComponent } from './components/search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import { SearchResultsItemMoreComponent } from './components/search-results-item-more/search-results-item-more.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { SearchResultsItemPageComponent } from './pages/search-results-item-page/search-results-item-page.component';
import { ResultsCardDescriptorComponent } from './components/results-card-descriptor/results-card-descriptor.component';
import { CustomItemComponent } from './components/custom-item/custom-item.component';
import { CustomItemMoreComponent } from './components/custom-item-more/custom-item-more.component';
// ================

@NgModule({
  declarations: [
    SearchResultsListComponent,
    SearchResultsItemComponent,
    SearchResultsItemMoreComponent,
    SearchResultsPageComponent,
    SearchResultsItemPageComponent,
    ResultsCardDescriptorComponent,
    CustomItemComponent,
    CustomItemMoreComponent,
  ],
  exports: [
    SearchResultsListComponent,
    SearchResultsItemComponent,
    SearchResultsItemMoreComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class YoutubeModule {}
