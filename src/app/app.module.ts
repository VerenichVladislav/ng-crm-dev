import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './core/header/header.component';

import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {AuthModule} from './core/auth/auth.module';
import { HotelindexComponent } from './hotelindex/hotelindex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { SearchResultComponentComponent } from './search-result-component/search-result-component.component';
import { DetailshotelComponentComponent} from './detailshotel-component/detailshotel-component.component';



@NgModule({
  declarations: [

    AppComponent,

    HeaderComponent,

    ProfileComponent,

    HotelindexComponent,

    SearchResultComponentComponent,

    DetailshotelComponentComponent,


    BuyTicketComponent,
  ],
  imports: [
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

    AuthModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent },
      { path:'HotelIndex', component:HotelindexComponent},
      { path:'SearchResult', component:SearchResultComponentComponent},
      { path:'SearchResult/:id', component:DetailshotelComponentComponent},
      {path: 'trips/:userid/:tripid/buy', component: BuyTicketComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
