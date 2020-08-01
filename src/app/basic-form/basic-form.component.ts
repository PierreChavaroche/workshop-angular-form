import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuiler: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuiler.group({
      email: '',
      message: 'Default message',
      career: ''
    });
  }

  async submitHandler() {
    const formValue = this.myForm.value;
    console.log(formValue);
  }
}
