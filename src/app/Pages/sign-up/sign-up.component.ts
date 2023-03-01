import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  showPassword = false;

  form: FormGroup = this.formBuilder.group({
    nickname: [null, [Validators.required]],
    fullname: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  next(){
    if(this.form.valid){
      this.router.navigate(['/sign-in']);
    }else{
      alert('All fields are required');
    }
  }

}
