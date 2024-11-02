import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AchievementsModule } from './achievements/achievements.module';
import { ExploreModule } from './explore/explore.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    RouterModule,
    AuthModule,
    AchievementsModule,
    ExploreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
