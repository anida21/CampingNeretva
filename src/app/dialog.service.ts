import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GooglereviewsComponent } from './googlereviews/googlereviews.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openImageDialog(): void {
    const dialogRef = this.dialog.open(GooglereviewsComponent, {
      width: '500px', // Prilagodite veličinu prema potrebi
    });
  }
}