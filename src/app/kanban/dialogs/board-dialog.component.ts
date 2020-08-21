import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardComponent } from '../board-card/board.component';
import { Board } from '../board.interface';

@Component({
  selector: 'app-board-dialog',
  template: `
  <h1 mat-dialog-title>Create a new board</h1>
  <div mat-dialog-content>
    <p>Title</p>
    <mat-form-field>
      <input placeholder="Title" matInput [(ngModel)]="data.title" />      
    </mat-form-field>

    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data.title" cdkFocusInitial>Create</button>
    </mat-dialog-actions>
  </div>
  `,
  styles: [
  ]
})
export class BoardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Board
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
