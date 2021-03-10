import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder ,Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { EmplyeeserviceService } from '../employeeservice.service';
import {Employee} from '../employee';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})


export class RegistrationComponent implements OnInit {
  message: string;
  datasaved = false;
  error = false;
  regForm: FormGroup;


   //regForm : any;


  constructor(private formbuilder: FormBuilder,private employeeservice: EmplyeeserviceService) {
    this.message = "";   
    this.regForm = new FormGroup({
      FirstName: new FormControl('',Validators.required),
      LastName: new FormControl('',Validators.required),
      EmailId: new FormControl('',Validators.required),
      Password: new FormControl('',Validators.required)
      });

   }

  ngOnInit(): void {
    
    this.setFormState();    
  }

  setFormState(): void {
    debugger;
       this.regForm = this.formbuilder.group({
      LastName: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      EmailId: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  
  onSubmit() {
    debugger;
    // let employee = this.regForm.value;

let employee = {
  FirstName : 'Test',
  LastName : 'Test',
  EmailId : 'Test',
  Password : 'Test'
};

    this.createemployee(employee);
    this.regForm.reset();
  }

  createemployee(employee: Employee) {
    this.employeeservice.createemployee(employee).subscribe(
      () => {
        this.datasaved = true;
        this.message = "User Created";
       this.regForm.reset();
      }
    )
  }
}
