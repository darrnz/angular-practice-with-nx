import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import {
  MaterialModule,
  SharedModule,
} from '@my-workspace/shared';
import { BlogCardsComponent } from './components/blog-cards/blog-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogCardsComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
  ],
  exports: [],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
