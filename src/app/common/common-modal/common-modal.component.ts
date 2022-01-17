import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {


  sortByProp!: FormControl;
  sortForm!: FormGroup;
  constructor(private dialogRef: MatDialogRef<CommonModalComponent>,) { }

  ngOnInit(): void {
    this.sortByProp = new FormControl('');
    this.sortForm = new FormGroup({
      sortByProp: this.sortByProp
    });
  }


  save() {
    this.dialogRef.close(this.sortForm.value);
  }

  close() {
    this.sortForm.reset()
    this.dialogRef.close();
  }
}
