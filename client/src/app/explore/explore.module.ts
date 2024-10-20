import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ExplorePageComponent } from './explore-page.component';
import { ExploreRoutingModule } from './explore-routing.module';



@NgModule({
  declarations: [
    ExplorePageComponent,
    SearchComponent,
    BookListComponent,
    BookDetailComponent,
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
