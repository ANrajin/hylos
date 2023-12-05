import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageTransition } from 'src/app/shared/animations';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { AlertType } from 'src/app/shared/components/alert/alert.type';

@Component({
  selector: 'admin-alert',
  standalone: true,
  imports: [
    CommonModule,
    AlertComponent
  ],
  templateUrl: './admin-alert.component.html',
  styleUrls: ['./admin-alert.component.css'],
  animations: [pageTransition],
})
export class AdminAlertComponent {
  readonly alertType = AlertType;
}
