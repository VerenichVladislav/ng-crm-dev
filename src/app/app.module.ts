
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './core/header/header.component';

import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthModule} from './core/auth/auth.module';
import {FilterComponent} from './core/auth/components/filter/filter.component';
import { HotelindexComponent } from './components/hotelindex/hotelindex.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { DetailshotelComponentComponent} from './components/detailshotel/detailshotel.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DataTransferService} from './shared/data-transfer.service';
import { DetailshotelDialogComponent } from './detailshotel-dialog/detailshotel-dialog.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { ScrollUpBtnComponent } from './core/scroll-up-btn/scroll-up-btn.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleServiceComponent } from './google-service/google-service.component';
import { GapiSession } from './google-service/GapiSession';
import {LoginComponent} from './core/auth/components/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export function initGapi(gapiSession: GapiSession) {
  return () => gapiSession.initClient();
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    FilterComponent,
    HotelindexComponent,
    SearchResultComponent,
    DetailshotelComponentComponent,
    DetailshotelDialogComponent,
    BuyTicketComponent,
    ScrollUpBtnComponent,
    GoogleServiceComponent,
  ],
  entryComponents:[DetailshotelDialogComponent],
  imports: [
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    AuthModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
      },
      { path: 'HotelIndex', component: HotelindexComponent},
      { path: 'SearchResult', component: SearchResultComponent},
      { path: 'SearchResult/:id', component: DetailshotelComponentComponent},
      {path: 'trips/:userid/:tripid/buy', component: BuyTicketComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'}
    ]),
    NoopAnimationsModule,
    ],
    providers: [
      { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSession], multi: true },
      GapiSession,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
