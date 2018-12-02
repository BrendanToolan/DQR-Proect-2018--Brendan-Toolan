import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import {MusicService} from './services/music.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { MusicCreateComponent } from './music-create/music-create.component';
import { MusicEditComponent } from './music-edit/music-edit.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
  {
    path: 'list',
    component: MusicDetailsComponent
  },
  {
    path: 'create',
    component: MusicCreateComponent
  },
  {
    path: 'edit/:id',
    component: MusicEditComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MusicDetailsComponent,
    MusicCreateComponent,
    MusicEditComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
