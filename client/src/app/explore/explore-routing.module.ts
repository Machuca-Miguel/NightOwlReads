import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ExplorePageComponent } from './explore-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorePageComponent,
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'book-list', component: BookListComponent },
      { path: 'book-detail/:id', component: BookDetailComponent },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {}
