import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../app.component';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public textValue!:string;
  @Input() public id!:number;
  @Input() public items!:Item[]
  @Input() public isDone:boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  @Output() idEmitter = new EventEmitter();

  emitIdToDelete = ()=>{
    this.idEmitter.emit({type:"delete", id:this.id, value:this.textValue})
  }
  emitIdToUpdate = ()=>{
    this.idEmitter.emit({type:"update", id:this.id, value:this.textValue})
  }
  emitIdToBeDone = () => {
    this.isDone = this.isDone?false:true;
  }

}
