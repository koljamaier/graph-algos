import { Component, OnInit } from '@angular/core';
import {IntSet, Empty, NonEmpty} from '../graph'

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  completedGraph: Array<IntSet> = new Array()

  constructor() { }

  ngOnInit() {
    let list: number[] = [4,3,9,12,13]
    let emptyGraph1 = new Empty

    let result = list.forEach(function(elem) {
      emptyGraph1 = emptyGraph1.incl(elem, emptyGraph1.x, emptyGraph1.y)
    }
    )

   console.log(emptyGraph1.contains(9), emptyGraph1.contains(15), emptyGraph1.contains(3), emptyGraph1.contains(19))

   function traverse(node: IntSet) {
    if(node instanceof NonEmpty) {
      this.completedGraph.push(node)
      traverse(node.left)
      traverse(node.right)
    }
   }
   traverse(emptyGraph1)
   console.log(this.completedGraph)


  }
;
}
