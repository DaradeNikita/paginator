import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  @Input() count!: number ;
  constructor() { }

  ngOnInit(): void {

   }
  }



//   onclickDec(){
//  this.count +=1
//   }

//  onclick(){
//    if(this.count === 1){
//     this.count
//    }else{
//     this.count --
//    }
//   }




