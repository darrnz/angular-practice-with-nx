import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { MaterialModule, SharedModule } from '@my-workspace/shared';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    SharedModule,
    MaterialModule
  ],
  providers: [],
})
export class AppModule {}
