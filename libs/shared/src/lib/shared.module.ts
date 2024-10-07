import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationService } from './services/navigation.service';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { MaterialModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [ActionButtonComponent, DatePickerComponent, ModalDialogComponent],
  imports: [CommonModule, MaterialModule, MatNativeDateModule],
  exports: [ActionButtonComponent, DatePickerComponent, ModalDialogComponent, MaterialModule, MatNativeDateModule, ],
  providers: [NavigationService, ApiService],
})
export class SharedModule {}
