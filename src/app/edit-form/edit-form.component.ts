import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormBuilder , FormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent implements OnInit{
  form:any;
  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      index: [{value: null, disabled:true}],
      username : ['', Validators.required],
      email : ['', Validators.required],
    });
  }
  submit(form:any){

  }
}
