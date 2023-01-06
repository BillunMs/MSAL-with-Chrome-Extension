import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BillunService {
  private sendUrl=environment.sendDataBillun
  
  constructor(private http:HttpClient) { }

  async send(signal:String){
    const  data={
      data:signal
    }
    const options = {headers: {'Content-Type': 'application/json'}};
    return new Promise((resolve,reject)=>{
      this.http.post(this.sendUrl,JSON.stringify(data),options).subscribe(data=>{
        data!==undefined?resolve(data):reject(data)
      })
     })  
  }
}
