import { Component, OnInit } from '@angular/core';
import { MemberResponse, MemberService } from 'src/app/Services/Member/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {

  constructor(private memberService: MemberService){}

  memberList!: MemberResponse[];


  ngOnInit(){
    this.getAllMembers();
  }


  getAllMembers(){
    this.memberService.getAllMember().subscribe((res:any) => {
      console.log(res.message);
      this.memberList = res.message;
    });
  }

  deleteMember(id: number){
    this.memberService.deleteMember(id).subscribe({
      next:(value)=>{
        alert("Deleted Successfully");
        this.getAllMembers();
      }

    })
  }

}
