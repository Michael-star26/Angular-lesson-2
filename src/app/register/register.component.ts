import { Component,OnInit } from '@angular/core';
import{ReactiveFormsModule,AbstractControl}from '@angular/forms'
import{FormControl,FormGroup,Validators} from '@angular/forms'
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,CommonModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})





export class RegisterComponent {
  username=new FormControl('',Validators.required)
  useremail=new FormControl('',Validators.required)
  password=new FormControl('',[Validators.minLength(8),Validators.required])
  cPassword=new FormControl('',[Validators.minLength(8)])
  match=''
  passMatch?:any
  updateName(){
    this.username.setValue('Tom Owino')
  }

  passmatchPassword(){
    if(this.cPassword === this.password){
      this.passMatch=true
    }else{
      this.passMatch=false
    }
    return this.passMatch? this.match='Paswords Match':this.match='Passwords do not match'
  }
}


