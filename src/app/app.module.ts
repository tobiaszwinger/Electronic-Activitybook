import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AddtourComponent } from './addtour/addtour.component';
import { PersonsComponent } from './persons/persons.component';
import { AddtnavbarComponent } from './addtour/addtnavbar/addtnavbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DayComponent } from './addtour/day/day.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TourComponent } from './addtour/day/tour/tour.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormComponent } from './addtour/day/tour/form/form.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { PersonstableComponent } from './persons/personstable/personstable.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationbarComponent,
    AddtourComponent,
    PersonsComponent,
    AddtnavbarComponent,
    DayComponent,
    TourComponent,
    FormComponent,
    PersonstableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatCardModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
