import { Component } from '@angular/core';
import { BwService } from '../Services/bw.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrl: './in.component.css'
})
export class InComponent {

  constructor(private api:BwService){}
  
  TopHeadlinesData:any =[];
  
    ngOnInit():void{
  
      this.api.TINews().subscribe((res)=>{
        console.log(res.articles);
        this.TopHeadlinesData=res.articles= res.articles;
  
    })
  
  }
  }