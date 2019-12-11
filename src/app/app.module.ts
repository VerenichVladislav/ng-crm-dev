
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './core/header/header.component';
// import { StompService } from 'ng2-stomp-service';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { DetailshotelComponentComponent} from './components/detailshotel/detailshotel.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DataTransferService} from './shared/data-transfer.service';
import { DetailshotelDialogComponent } from './components/detailshotel-dialog/detailshotel-dialog.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { ScrollUpBtnComponent } from './core/scroll-up-btn/scroll-up-btn.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GoogleServiceComponent } from './google-service/google-service.component';
import { GapiSession } from './google-service/GapiSession';
import {LoginComponent} from './core/auth/components/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConnectionErrorComponent } from './components/snack-bar/connection-error/connection-error.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { IndexComponent } from './components/index/index.component';
import { TourIndexComponent } from './components/tour-index/tour-index.component';
import { TourSearchResComponent } from './components/tour-search-res/tour-search-res.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { MapFindHotelComponent } from './map-find-hotel/map-find-hotel.component';
// import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';
import {SearchResultTripComponent} from './components/search-result-trip/search-result-trip.component';
import {FlightsindexComponent} from './components/flightsindex/flightsindex.component';
//import { SideFiltersComponent } from './components/side-filters/side-filters.component';
import { Page404Component } from './core/page404/page404.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {GlobalRootURL} from './GlobalRootURL';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {LoginGuard} from "./shared/login-guard.service";
import {AdminModule} from "./core/admin/admin.module";
import { ReplenishWalletComponent } from './components/replenish-wallet/replenish-wallet.component';
import { NewsComponent } from './news/news.component';
import { TicketMapComponent } from './ticket-map/ticket-map.component';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog.component';
import { SuccesfulReplenishingComponent } from './core/succesful-replenishing/succesful-replenishing.component';
import {RegisterComponent} from "./core/auth/components/register/register.component";

export function initGapi(gapiSession: GapiSession) {
  return () => gapiSession.initClient();
}

export function createTranslateLoader(http: HttpClient) {
  const URL = GlobalRootURL.BASE_API_URL + 'international?lang=';
  return new TranslateHttpLoader(http, URL, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page404Component,
    ProfileComponent,
    FilterComponent,
    HotelindexComponent,
    FlightsindexComponent,
    SearchResultComponent,
    SearchResultTripComponent,
    DetailshotelComponentComponent,
    DetailshotelDialogComponent,
    BuyTicketComponent,
    ScrollUpBtnComponent,
    CommentsComponent,

    ConnectionErrorComponent,
    SnackBarComponent,

    GoogleServiceComponent,

    IndexComponent,

    TourIndexComponent,

    // ChatDialogComponent,
    TourSearchResComponent,
    TourDetailsComponent,
    TourSearchResComponent,
    // ChatDialogComponent,
    MapFindHotelComponent,
    NewsComponent,
    // SideFiltersComponent,
    MapFindHotelComponent,
    ReplenishWalletComponent,
    SearchResultTripComponent,
    TicketMapComponent,
    ConfirmationDialog,
    SuccesfulReplenishingComponent,
    //SideFiltersComponent,
  ],
  entryComponents: [
    DetailshotelDialogComponent,
    ConnectionErrorComponent,
    ConfirmationDialog
  ],
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
    MatGridListModule,
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
    NgbModule,

    AuthModule,
    AdminModule,

    TranslateModule.forRoot( {
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }
    }),

    Ng4LoadingSpinnerModule.forRoot(),

    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [LoginGuard]
      },

      { path: 'HotelIndex', component: HotelindexComponent},
      {path:'News',component:NewsComponent},
      { path: 'Index', component: IndexComponent},
      { path: 'SearchResult', component: SearchResultComponent},
      { path: 'SearchResultTrip', component: SearchResultTripComponent},
      { path: 'SearchResult/:id',
        component: DetailshotelComponentComponent,
        canActivate: [LoginGuard]
      },
      {path: 'trips/:tripid/buy', component: BuyTicketComponent},
      {path:'tourResult',component:TourSearchResComponent},
      {path:'tourResult/:id', component:TourDetailsComponent},
      {path:'Mapfind',component:MapFindHotelComponent},
      {path: '', component: IndexComponent},
      {path: 'trips', component: FlightsindexComponent},
      {path: 'wallets/:id/confirm/:confirmCache', component: SuccesfulReplenishingComponent},
      { path: '**', component: Page404Component},
    ]),
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSession], multi: true },
    GapiSession,
    DataTransferService,
    SnackBarComponent,
    TranslateService
    // StompService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
