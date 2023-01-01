
 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MsEmailService {

  private messagesAPI_MS = environment.messagesAPI_MS
  private emailList_API = environment.emailList
  private catalog_API = environment.categoriesAPI

  constructor(private http:HttpClient) { 


  }

  async fetchMSMessages(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.messagesAPI_MS).subscribe(data=>{
        var arrRet=[]
        var rawData=data['value']
        console.log(rawData,'rawData messages')
        if(rawData===undefined){
          reject()
        }
      
          rawData.forEach((element:any) => {
            var formatedData= {
              idMessage:element.id,
              sender:element.sender.emailAddress.address              ,
              categories:element.categories
            }
            arrRet.push(formatedData)
          });
        
        resolve(arrRet)
      })
    })    
  }

  fetchWrongEmails(){
     return new Promise((resolve,reject)=>{
      this.http.get(this.emailList_API).subscribe(data=>{
        data!==undefined?resolve(data):reject(data)
      })
     })   
  }

  async createCategorie(categorieObj){
    return new Promise((resolve,reject)=>{
      this.http.post(this.catalog_API,categorieObj).subscribe(data=>{
        data!==undefined?resolve(data):reject(data)
      })
     })   
  }

  getCategories(){
    return new Promise((resolve,reject)=>{
      this.http.get(this.catalog_API).subscribe(data=>{
        var arr=[]
        if(data===undefined){
          reject(data)
        }
        console.log(data,'data')
        var rawData=data['value']

        rawData.forEach((element:{id:string;displayName:string,color:string}) => {
          var form={
            displayName:element.displayName,
            color:element.color
          }
          arr.push(form)
        });
        resolve(rawData)
      })
     }) 
  }

  async initCategoriesStage(){
    await this.getCategories().then(async resp=>{
      var tempArr=resp as []
      var redColor=tempArr.filter((element:{displayName:string,color:string})=>{
        if(element.displayName==='Non verifié' && element.color=='preset0'){
          return true
        }
      })
     
      var greenColor=tempArr.filter((element:{displayName:string,color:string})=>{
        if(element.displayName==='Verifié' && element.color=='preset4'){
          return true
        }
      })
      
      if(redColor.length===0){
        var categRed={displayName:'Non verifié',color:'preset0'}
        await this.createCategorie(categRed).then(resp=>console.log('Red categorie created',resp))
        .catch(error=>{console.log('Error red',error)})
      }
      if(greenColor.length===0){

        var categRed={displayName:'Verifié',color:'preset4'}
        await this.createCategorie(categRed).then(resp=>console.log('Green categorie created',resp))
        .catch(error=>{console.log('Error green',error)})

      }
    })
  }

  setCategorieByMessage(message:{idMessage:string,categories:Array<string>,sender:string},categorie:Array<string>){
    var idMessage=message.idMessage
    var categObject={categories:categorie}
    return new Promise((resolve,reject)=>{
      this.http.patch(this.messagesAPI_MS+'/'+idMessage,categObject).subscribe(data=>{
        data!==undefined?resolve(data):reject(data)
      })
     }) 

  }


  async setCategoriesByEmails(){
    var emails=[]
    var messages=[]
    var promises=[]
    
    var p1=this.initCategoriesStage()
    var p2=this.fetchWrongEmails().then(resp=>{emails=resp as []})
    var p3=this.fetchMSMessages().then(resp=>{messages=resp as []})

    await Promise.all([p1,p2,p3])
    var hashMap={}
    
    emails.forEach((email:string)=>{
      hashMap[email]=true
    })



    messages.forEach((message:{idMessage:string,sender:string,categories:Array<string>})=>{
      console.log('message ',message)
      var tempArr=message.categories.map(element=>{
        return element
      })
      var prom=null
      if(hashMap[message.sender]!==undefined){
        tempArr.push('Verifié')
        prom=this.setCategorieByMessage(message,tempArr)
      }
      else{
        tempArr.push('Non verifié')
        prom=this.setCategorieByMessage(message,tempArr)
      }
      console.log('my message',message)
      promises.push(prom)
    })
    
    return Promise.all(promises)
  }

  async resetCategoriesByEmails(){
    var emails=[]
    var messages=[]
    var promises=[]
    var p1=this.initCategoriesStage()
    var p2=this.fetchWrongEmails().then(resp=>{emails=resp as []})
    var p3=this.fetchMSMessages().then(resp=>{messages=resp as []})

    await Promise.all([p1,p2,p3])

    messages.forEach((message:{idMessage:string,sender:string,categories:Array<string>})=>{
        var prom=null
        var arr=message.categories.filter(categorie=>{
          if(categorie==='Verifié'||categorie==="Non verifié")
            return false
          return true
        })

        prom=this.setCategorieByMessage(message,arr)
        promises.push(prom)
        } );
    
    return Promise.all(promises)
  }
}
