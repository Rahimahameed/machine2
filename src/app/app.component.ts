import { Component, OnInit } from '@angular/core';
import { insert } from './model/createuser';
import { updateuser } from './updatemodel/update';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private dataservice: DataserviceService){}


  ngOnInit(): void {
    
  }
  male:boolean=true;
  female:boolean=false;
   updatestatus:any
   updtInp= new updateuser()



  title = 'service';
  result: any
  user = new insert()
  insertData(){
    console.log(this.user)
    this.dataservice.insertData(this.user).subscribe(res=>{
      this.result= res;
      console.log(res);
    })
  }
data:any
  genders = ['male','female']

  submit(form: any){
    console.log(form)
  }

  log(mail:any){
    console.log(mail)
  }

   onsubmit(){
    console.log(this.user)
   }
  
  updateuser(userid:any){
    this.female=false
    this.male=true
    for(const key in this.data){
      if(this.data[key].id == userid){
        this.updtInp.id=userid;
        this.updtInp.id.f_name=this.data[key].f_name;
        this.updtInp.id.l_name=this.data[key].l_name;
        this.updtInp.id.dob=this.data[key].dob;
        this.updtInp.id.gender=this.data[key].gender;
        this.updtInp.id.email=this.data[key].email;
      
      if(this.data[key].gender == 'male'){
        this.male=true
      }
      else{
        this.female=true
      }
    }

    }
  }
  changegender(radioChange: any){
    this.updtInp.gender=radioChange.value
  }
  updatedata(){
    this.dataservice.updateuser(this.updtInp).subscribe(res=>{
      this.updatestatus = res
    })
  }
  }
  
  
  


 

