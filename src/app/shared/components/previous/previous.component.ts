import { Component, Input, OnInit } from '@angular/core';
import { PaginatorService } from '../../services/paginator.service';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {
  @Input() count!: number ;

  constructor() { }




  ngOnInit(): void {
//   this._paginatorService.newSub$
//   .subscribe((res : number) =>{
//     this.count = res-=1

// })

//   this._paginatorService.newDecSub$
//   .subscribe((res:number) =>{
//    this.count  = res+=1
//     })
}

  // onclickDec(){
  //   this.count +=1
  //    }

  //   onclick(){
  //     if(this.count === 0){
  //      this.count
  //     }else{
  //      this.count --
  //     }
  //    }

}




