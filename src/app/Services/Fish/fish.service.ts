import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface FishResponse{
  name: string,
  averageWeight: number,
  level_id: number
}

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private httpClient:HttpClient) { }

  saveFish(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/fish`,inputData);
  }

  getAllFish(){
    return this.httpClient.get('http://localhost:8080/api/fish/all');
  }

  getOne(fishId: Number){
    return this.httpClient.get(`http://localhost:8080/api/fish/${fishId}`);
  }

  updateFish(inputData: Object, fishId: number){
    return this.httpClient.put(`http://localhost:8080/api/fish/${fishId}`,inputData);
  }

  deleteFish(fishId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/fish/${fishId}`);
  }
}
