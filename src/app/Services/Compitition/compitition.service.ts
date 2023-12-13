import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface CompititionResponse{
  code: string,

  date: Date,

  startTime: Date;

  endTime: Date;

  numberOfParticipants: number,

  location: string,

  amount: number
}


@Injectable({
  providedIn: 'root'
})
export class CompititionService {

  constructor(private httpClient:HttpClient) { }

  saveCompitition(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/compitition`,inputData);
  }

  getAllCompitition(){
    return this.httpClient.get('http://localhost:8080/api/compitition/all');
  }

  getOne(compititionId: string){
    return this.httpClient.get(`http://localhost:8080/api/compitition/${compititionId}`);
  }

  updateCompitition(inputData: Object, compititionId: string){
    return this.httpClient.put(`http://localhost:8080/api/compitition/${compititionId}`,inputData);
  }

  deleteCompitition(compititionId:string){
    return this.httpClient.delete(`http://localhost:8080/api/compitition/${compititionId}`);
  }
}
