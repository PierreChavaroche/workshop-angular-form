import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(private formBuiler: FormBuilder) { }

  ngOnInit(): void {
    const phone = this.formBuiler.group({
      area: [],
      prefix: [],
      line: []
    });

    this.myForm = this.formBuiler.group({
      email: '',
      homePhone: phone,
      cellPhone: phone
    });
  }

}
