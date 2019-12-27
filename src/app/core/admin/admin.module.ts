import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import { MainComponent } from './components/main/main.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatTreeModule} from "@angular/material/tree";
import {MatListModule} from "@angular/material/list";
import {MatSortModule} from "@angular/material/sort";
import {MatChipsModule} from "@angular/material/chips";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HotelsComponent } from './components/hotels/hotels.component';
import { CompaniesComponent } from './components/companies/companies.component';
import {TransportsComponent} from "./components/transports/transports.component";
import {AdminGuardService} from "../../shared/admin-guard.service";

const adminRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'transports', component: TransportsComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'hotels', component: HotelsComponent},
];

@NgModule({
  declarations: [
    UsersComponent,
    MainComponent,
    HotelsComponent,
    TransportsComponent,
    CompaniesComponent
  ],
  exports: [
    UsersComponent,
    MainComponent,
    TransportsComponent,
    HotelsComponent,
    CompaniesComponent
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

    CommonModule,
    TranslateModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      {
        path: 'admin',
        component: MainComponent,
        canActivate: [AdminGuardService],
        children: adminRoutes
      },
      ]),
  ],
})
export class AdminModule { }
