import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(public loginSer:LoginService) { }
  ngOnInit(): void {
  }
  createAccount(){
    let login = this.loginRef.value;
    console.log(login);
    //this.loginSer.createLogin(login);
  }
}
