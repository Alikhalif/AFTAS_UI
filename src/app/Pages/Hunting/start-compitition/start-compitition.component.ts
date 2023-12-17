import { Component } from '@angular/core';
import { CompititionResponse, CompititionService } from 'src/app/Services/Compitition/compitition.service';

@Component({
  selector: 'app-start-compitition',
  templateUrl: './start-compitition.component.html',
  styleUrls: ['./start-compitition.component.css']
})
export class StartCompititionComponent {
  constructor(private compititionService: CompititionService){}

  CompititionList!:CompititionResponse[];


  ngOnInit(){
    this.getAllCompetitions();
  }

  getAllCompetitions(){
    this.compititionService.getAllCompitition().subscribe((res:any) => {
      console.log(res.message);
      this.CompititionList = res.message;
    });
  }
}
