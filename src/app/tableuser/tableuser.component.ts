import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { updateuser } from '../updatemodel/update';

@Component({
  selector: 'app-tableuser',
  templateUrl: './tableuser.component.html',
  styleUrls: ['./tableuser.component.css']
})
export class TableuserComponent implements OnInit {
  data:any
  result:any

  



  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.getRegisterData();
  }
getRegisterData(){
  this.dataservice.getData().subscribe(res=>{
    this.data=res;
    console.log(this.data)
  })
}
// deleteuser(userid:any){
//   this.dataservice.deletedata(userid).subscribe(res=>{
//     this.result=res;
//     alert (res)
//     this.getRegisterData
//   })
// }

deleteuser(i:any)
{
  console.log(i)
  this.dataservice.deleteData(i).subscribe(data=>{
    this.result=data;
    alert(data) 
  this.getRegisterData()
  })
}


// deleteuser(userid: any){
//   this.dataservice.deleteData(userid).subscribe(res=>{
//     this.result = res;
//     alert(res);
//     this.getRegisterData()
//   })
// }

updateuser(data: any){

}

}