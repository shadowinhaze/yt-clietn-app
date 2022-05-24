// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SharedModule } from '../shared/shared.module';
// ================

// Components
import { SearchResultsListComponent } from './components/search-results-list/search-results-list.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { SearchResultsItemPageComponent } from './pages/search-results-item-page/search-results-item-page.component';
import { ResultsCardDescriptorComponent } from './components/results-card-descriptor/results-card-descriptor.component';
import { CardComponent } from './components/card/card.component';
import { CardMoreComponent } from './components/card-more/card-more.component';
// ================

@NgModule({
  declarations: [
    SearchResultsListComponent,
    SearchResultsPageComponent,
    SearchResultsItemPageComponent,
    ResultsCardDescriptorComponent,
    CardComponent,
    CardMoreComponent,
  ],
  exports: [SearchResultsListComponent, CardComponent, CardMoreComponent],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
})
export class YoutubeModule {}
