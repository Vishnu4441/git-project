import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';


export interface PeriodicElement {
  Name: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Name: "",
},
{
    Name: ""
},
{
    Name: ""
}
];


@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  displayedColumns: string[] = [ 'Name'];
  dataSource = [...ELEMENT_DATA];


  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
