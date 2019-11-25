import { Component } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project7';
  
  // jobportall(u: { value: { username: string; education: string; gender: string; }; }){
  //   console.log(u.value);
  //  if(u.value.username==""){
  //    alert("pls enter the username");
  //  }
  //  if(u.value.education==undefined){
  //    alert("pls enter the education");
  //  }
  //  if(u.value.gender==undefined){
  //    alert("pls select the gender");
  //  }
 
  // alert("username:"+u.value.username+",education :"+u.value.education+",gender :"+u.value.gender);
 
  // }

  firstName:string="";
  lastName:string="";
  // emailid:string="";
  // mobileNumber:string="";
  // file:string="";
  // edfld:string="";
  // genderfld:string="";
  // psw:string="";
  // cpsw:string="";
 msg:string = null;
 
 Submit(f){
    if(f.valid){
      this.msg = "Firstname:" + this.firstName + 
      "<br>Lastname:" + this.lastName;
      // "<br> Emailid:" + this.emailid + 
      // "<br>MobileNumber:" +this.mobileNumber + 
      // "<br>File:"+this.file +
      // "<br>Educationfield:"+this.edfld + 
      // "<br>Gender:"+this.genderfld +
      //  "<br>Password:"+this.psw +
      //  "<br>Confirmpassword:"+this.cpsw; 
    }
    else {
      this.msg = "invalid";
    }
  }
  

education:string[]=["btech", "mba","degree"]
 
 fruits:string[]=["apple","orange","mango","pineapple","grapes"];
 add(){
   let x = prompt("please enter fruite name here");
   this.fruits.push(x);
 }
 remove(){
   this.fruits.pop();
 }


}
