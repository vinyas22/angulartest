import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

a= 'Angular'
b='no datatype'
c=32599

document:any
status=false
d=true
heroes=['superman','batman',['flash','aquaman']]
emp1='bruce'
emp2='clark'
emp3='barry'
money=265151605165
todaydate= new (Date)
perfomance= 2/100
user:User[]=[]
constructor(@Inject(DOCUMENT)document:Document, private testserv:TestService){
  this.document=document
}
name: undefined

  ngOnInit(): void {
   alert(this.testserv.todaydate())
  }

  printdata(event:any){
    alert(this.name)
    //alert(this.document.getElementById('doctest').value);
  }
  printtext(event:any){
    //alert(this.name)
    alert(this.document.getElementById('twotest').value);
  }
  getuserdata(){
  this.testserv.getallusers().subscribe(user=>{
   this.user=user;
  })  
  }
 
}


