
import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'paginatorTask';

pageNum: number = 2;

  constructor(){}
  ngOnInit(): void {

}

   }



