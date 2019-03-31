import { Component, OnInit } from '@angular/core';
import {IntSet, Empty, NonEmpty} from '../graph'
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //let emptyGraph = new NonEmpty(1,new Empty, new Empty, 500, 50)
    //emptyGraph.x = 500
    //emptyGraph.y = 50
    let list: number[] = [4,3,9,12,13]
    let emptyGraph1 = new Empty
    emptyGraph1 = emptyGraph1.incl(1, 500, 50)
    //console.log("von wegen missing digger", emptyGraph1.left, emptyGraph1.right, emptyGraph1.elem)

    let result = list.forEach(function(elem) {
      console.log(emptyGraph1, emptyGraph1.x, emptyGraph1.y)
      
      emptyGraph1 = emptyGraph1.incl(elem, emptyGraph1.x, emptyGraph1.y)
    }
    )

   console.log(emptyGraph1)

  }
;
}
