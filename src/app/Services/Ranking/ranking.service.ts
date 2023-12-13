import { Injectable } from '@angular/core';

export interface RankingResponse{

  rank : number,

  score : number,

  member_id : number,

  competition_id : number,
}


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor() { }
}
