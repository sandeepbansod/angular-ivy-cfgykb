import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = ', Add User Record';
  saveUserData: any[] = [];

  addRecord: FormGroup;
  name: FormControl;
  age: FormControl;

  constructor(private _fb: FormBuilder) {
    this.addRecord = this._fb.group({
      name: [''],
      age: [''],
    });
  }

  get errorControl(): { [key: string]: AbstractControl } {
    return this.addRecord.controls;
  }

  saveRecords() {
    this.saveUserData.push(this.addRecord.value);
    this.addRecord.reset();
  }
}
