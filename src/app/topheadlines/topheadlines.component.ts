import { Component,OnInit } from '@angular/core';
import { BwService } from '../Services/bw.service';
@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrl: './topheadlines.component.css'
})
export class TopheadlinesComponent {

constructor(private api:BwService){}

TopHeadlinesData:any =[];

  ngOnInit():void{

    this.api.TcHeadlines().subscribe((res)=>{
      console.log(res.articles);
      this.TopHeadlinesData=res.articles= res.articles;

  })

}
}
