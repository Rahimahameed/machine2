import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  data:any

  constructor(private httpClient: HttpClient) { }
  private url="https://cybersquare.herokuapp.com/user/"
  getData(){
    return this.httpClient.get(this.url)
  }

  insertData(data: any){
    return this.httpClient.post('https://cybersquare.herokuapp.com/user/',data)
  }
  deleteData(id : any){
    return this.httpClient.delete("https://cybersquare.herokuapp.com/user/:id"+id)
    // (res=>
    //   {
    //     return this.data.json()
    //   })
  }

  updateuser(data:any){
    return this.httpClient.put('https://cybersquare.herokuapp.com/user/',data)
  }
}
