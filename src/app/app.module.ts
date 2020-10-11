import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
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
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {TypeService} from './services/type.service';
import {TripService} from './services/trip.service';
import {PersonService} from './services/person.service';
import { PersonUIComponent } from './persons/person-ui/person-ui.component';
import { TripTableComponent } from './home/trip-table/trip-table.component';
import { CommonModule } from '@angular/common';
import { PersonTableComponent } from './addtour/person-table/person-table.component';

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
    PersonUIComponent,
    TripTableComponent,
    PersonTableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Electronic-Activitybook'),
    AngularFirestoreModule, // Only required for database features
    // AngularFireAuthModule, // Only required for auth features,
    // AngularFireStorageModule, // Only required for storage features
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
    MatAutocompleteModule,
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
  providers: [AngularFirestore,
              TypeService,
              TripService,
              PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
