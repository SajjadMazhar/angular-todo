import { Component } from '@angular/core';

export interface Item{
  itemValue:string;
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'crud-with-angular';
  public textValue = "";
  public items:Item[] = [{
    itemValue:"sajjad",
    id:1
  }]
  isUpdate = "Updating...";

  public isUpdating:boolean = false;
  public updatingId!:number
  
  addTodo = ()=>{
    if(!this.textValue.trim()) return;
    if(this.isUpdating){
      this.items = this.items.map(item=> {
        console.log(item, this.updatingId)
        if(item.id === this.updatingId){
          return {...item, itemValue:this.textValue}
        }
        return item
      })
      this.isUpdating = false
    }
    else{
      let maxId = this.items.reduce((acc, curr)=> Math.max(acc, curr.id), 0)
      this.items.push({
        itemValue:this.textValue,
        id:maxId+1
      })
    }
    this.textValue = "";
  }


  actionOnItem = ($event:any) => {
    if($event.type === "delete"){
      this.items = this.items.filter(item=> item.id !== $event.id)
    }else if($event.type === "update"){
      this.isUpdating = true;
      this.textValue = $event.value
      this.updatingId = $event.id;
    }
  }
}
