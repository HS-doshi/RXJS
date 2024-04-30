import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {

  title  = new FormControl('',[
    Validators.required,
  ])
  code = new FormControl('',[
    Validators.required
  ])
  binForm = new FormGroup({
    title : this.title,
    code : this.code
  })
  gotoBin(){
   console.log(this.binForm.value)
  }
}