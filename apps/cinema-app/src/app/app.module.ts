import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { StoreComponent } from './components/store/store.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ConctactComponent } from './components/conctact/conctact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule as SharedLib } from '@my-workspace/shared';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainPageComponent,
    MovieDetailComponent,
    StoreComponent,
    SideNavComponent,
    TicketsComponent,
    ConctactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedLib,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
