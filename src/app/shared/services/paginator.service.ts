import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService implements OnInit {


   newSub$ :Subject<number> = new Subject<number>()
   newDecSub$ :Subject<number> = new Subject<number>()


  constructor() { }

  ngOnInit(): void {

  }

}
