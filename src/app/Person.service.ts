import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './models/IPerson';

const    data:Person[]=[
  {id:1,name:"ali",rate:2},
   {id:2,name:"mohamed1",rate:2},
   {id:3,name:"hosam",rate:4},
   {id:4,name:"walied",rate:5}
   ]

@Injectable({
  providedIn: 'root'
})
export class PersonService {

constructor(private http:HttpClient) { }


getPresons(){
 return data;
}
getPresonById(id:number){
  return data.find(a=>a.id==id);
 }
addPreson(person:Person){
  return data.push(person);
 }

}
