import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(frm:any){
    console.log(frm)
  }
  log(email:any){
    console.log(email)
  }
}
