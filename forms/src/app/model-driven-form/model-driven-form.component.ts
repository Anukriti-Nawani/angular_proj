import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent {
  result:string = '';
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  handleSubmit(){
    // console.log('hello')
    
    let login = this.loginRef.value;
    let email=login.user;
    let pass=login.pass;

    if(email== "abc@gmail.com" && pass=="1234") {
      
      console.log(email,pass)
      this.result = 'successful'
    }
    else {
      this.result = 'failure'
    }
    console.log(email,pass)

  }
}
