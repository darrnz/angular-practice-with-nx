import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';
import { TicketItemComponent } from './ticket-item/ticket-item.component';
import { MaterialModule, SharedModule as SharedLib } from '@my-workspace/shared';

@NgModule({
  declarations: [
    MovieCardComponent,
    StoreItemComponent,
    CurrencyConverterPipe,
    TicketItemComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedLib],
  exports: [
    MovieCardComponent,
    StoreItemComponent,
    CurrencyConverterPipe,
    TicketItemComponent
  ],
})
export class SharedModule {}
