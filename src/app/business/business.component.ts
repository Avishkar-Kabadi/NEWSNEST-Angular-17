import { Component } from '@angular/core';
import { BwService } from '../Services/bw.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

  constructor(private api:BwService){}
  
  BussinessData:any =[];
  
    ngOnInit():void{
  
      this.api.BusinessTC().subscribe((res)=>{
        console.log(res.articles);
        this.BussinessData=res.articles= res.articles;
  
    })
  
  }
  }