import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from '../shared/constants/shared-constants';
import { SearchResultsItemPageComponent } from './pages/search-results-item-page/search-results-item-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { ResultsItemMoreResolver } from './resolvers/results-item-more.resolver';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsPageComponent,
  },
  {
    path: `${Paths.vid}/:id`,
    component: SearchResultsItemPageComponent,
    resolve: {
      resultsItem: ResultsItemMoreResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
