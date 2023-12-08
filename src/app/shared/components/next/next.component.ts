import { Component, Input, OnInit } from '@angular/core';
import { PaginatorService } from '../../services/paginator.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {
  @Input() count!: number ;
  constructor( ) {}

  ngOnInit(): void {

  }
}
