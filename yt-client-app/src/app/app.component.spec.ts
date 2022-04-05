import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, TITLE } from './app.component';
import { DataService } from './services/data.service';
import { FilterDataService } from './services/filter-data-service';
import { SettingsService } from './services/settings.sevice';
import { SortDataService } from './services/sort-data-service';

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
import { DirectionIconDirective } from './directives/direction-icon.directive';

// Angular Material
// ================

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatGridListModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
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
      providers: [
        DataService,
        SortDataService,
        FilterDataService,
        SettingsService,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title ${TITLE}`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(TITLE);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('h1') as HTMLElement;
    expect(compiled.textContent).toContain(`${TITLE}`);
  });
});
