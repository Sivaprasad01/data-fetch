import { Component, OnInit } from '@angular/core';
import { MyData } from 'src/model/myData';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  // allData:any;
  allData:MyData[]=[];

  constructor(private api:ApiService){}
//Angular lifecycle hook
  ngOnInit():void{
    this.api.getAllDatas().subscribe((data:any)=>{
      console.log(data);
      this.allData=data;
    })
  }
}
