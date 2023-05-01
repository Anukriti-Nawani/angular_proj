import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
  result:string = '';
  handleSubmit(loginRef:NgForm){
    // console.log('hello')
    let email=loginRef.value.user;
    let pass=loginRef.value.pass;

    if(email=== 'abc@gmail.com' && pass==='1234') {
      
      console.log(email,pass)
      this.result = 'successful'
    }
    else {
      this.result = 'failure'
    }
    console.log(email,pass)

  }
}
