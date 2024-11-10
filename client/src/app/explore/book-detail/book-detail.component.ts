import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book-model';
import { GoogleBooksApiService } from 'src/app/services/api/google-books-api.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, AfterViewChecked {
  private bookId!: string;
  public book!: Book;
  public isExpanded = false;
  public showButton = false;

  @ViewChild('description') description!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkOverflow();
  }

  constructor(
    private route: ActivatedRoute,
    public googleBookApi: GoogleBooksApiService,
    private cdr: ChangeDetectorRef,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      this.googleBookApi.getBookDetails(this.bookId).subscribe((book) => {
        this.book = Book.createFromGoogleBookResponse(book);
        this.spinnerService.hide();
      });
    });
  }

  ngAfterViewChecked(): void {
    this.checkOverflow();
  }

  public toggleDescription() {
    this.isExpanded = !this.isExpanded;
    this.checkOverflow();
  }

  private checkOverflow(): void {
    if (this.description) {
      const element = this.description.nativeElement;
      if (element.scrollHeight > element.clientHeight) {
        this.showButton = true;
      }

      this.cdr.detectChanges();
    }
  }
}
