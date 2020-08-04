import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuiler: FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuiler.group({
      email: '',
      phones: this.formBuiler.array([])
    });
  }

  get phoneForms(): FormArray { // helper
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.formBuiler.group({
      area: [],
      prefix: [],
      line: []
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
}
