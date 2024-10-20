import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {
  MatAutocompleteModule,
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatChipsModule,
  MAT_CHIPS_DEFAULT_OPTIONS,
} from '@angular/material/chips';
import { MatRippleModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatProgressSpinnerModule,
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AchievementCardComponent } from './achievement-card/achievement-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatTabsModule,
  MatChipsModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatListModule,
  MatSelectModule,
  MatIconModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatDialogModule,
  MatRippleModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    NavigationBarComponent,
    FooterComponent,
    UserAvatarComponent,
    SideNavComponent,
    AchievementCardComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, modules, FormsModule],
  exports: [
    FooterComponent,
    NavigationBarComponent,
    UserAvatarComponent,
    AchievementCardComponent,
    SideNavComponent,
    CommonModule,
    modules,
    SearchBarComponent,
  ],
})
export class SharedModule {}
