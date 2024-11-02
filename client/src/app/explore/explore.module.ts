import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ExplorePageComponent } from './explore-page.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { BookTabsComponent } from './book-detail/book-tabs/book-tabs.component';
import { OverviewComponent } from './book-detail/book-tabs/overview/overview.component';
import { MoreByAuthorComponent } from './book-detail/book-tabs/more-by-author/more-by-author.component';
import { OtherEditionsComponent } from './book-detail/book-tabs/other-editions/other-editions.component';
import { SimilarBooksComponent } from './book-detail/book-tabs/similar-books/similar-books.component';
import { PublisherCollectionComponent } from './book-detail/book-tabs/publisher-collection/publisher-collection.component';



@NgModule({
  declarations: [
    ExplorePageComponent,
    SearchComponent,
    BookListComponent,
    BookDetailComponent,
    BookTabsComponent,
    OverviewComponent,
    MoreByAuthorComponent,
    OtherEditionsComponent,
    SimilarBooksComponent,
    PublisherCollectionComponent,
  ],
  imports: [
    SharedModule,
    ExploreRoutingModule,
  ],
  exports: [
    ExplorePageComponent,
    SearchComponent,
    BookListComponent,
    BookDetailComponent,
  
  ],

})
export class ExploreModule { }
