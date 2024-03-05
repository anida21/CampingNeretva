import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-googlereviews',
  templateUrl: './googlereviews.component.html',
  styleUrls: ['./googlereviews.component.css']
})
export class GooglereviewsComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public dialogRef: MatDialogRef<GooglereviewsComponent>) { }

  redirectToLink(): void {
    // Ovdje postavite link na koji želite preusmjeriti korisnika
    window.location.href = 'https://www.google.com/search?q=camping.neretva+google+review&rlz=1C1GCEU_en-GBBA981BA981&oq=campi&gs_lcrp=EgZjaHJvbWUqBggDEEUYOzIGCAAQRRg5MgYIARBFGDwyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMjY2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x134b4321a14089d3:0x74d66a27338b237,1,,,,';
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
