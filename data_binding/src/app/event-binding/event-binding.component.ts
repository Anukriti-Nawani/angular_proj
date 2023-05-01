import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

searchValue: string = 'iphone';
msg:string = 'hi folks';
name:string = "";

changeSearchValue(eventData:Event) {
  this.searchValue = (<HTMLInputElement>eventData.target).value;
}

abc() {
  console.log("heya, it's anukriti")
  return this.msg = "heya, it's anukriti";
}

xyz(nameref:any):void {
  console.log(nameref)
this.name=nameref.value;
}

}
