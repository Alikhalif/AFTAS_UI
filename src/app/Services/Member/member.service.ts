import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface MemberResponse{
  id: number,

  name: string,

  familyName: string,

  accessionDate: Date,

  nationality: string,

  identityDocument: string,

  identityNumber: string
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient:HttpClient) { }

  saveMember(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/member`,inputData);
  }

  getAllMember(){
    return this.httpClient.get('http://localhost:8080/api/member/all');
  }

  getOne(memberId: Number){
    return this.httpClient.get(`http://localhost:8080/api/member/num/${memberId}`);
  }

  getByName(name: string){
    return this.httpClient.get(`http://localhost:8080/api/member/name/${name}`);
  }

  getByFamilyName(fname: string){
    return this.httpClient.get(`http://localhost:8080/api/member/familyname/${fname}`);
  }

  updateMember(inputData: Object, memberId: number){
    return this.httpClient.put(`http://localhost:8080/api/member/${memberId}`,inputData);
  }

  deleteMember(memberId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/member/${memberId}`);
  }


}
