import { Component, OnInit } from '@angular/core';
import {IntSet, Empty, NonEmpty} from '../graph'

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})

export class NodeComponent implements OnInit {

  globalCompletedGraph: Array<IntSet>
  show : boolean = true

  isEmpty(node : IntSet) { return node instanceof Empty; }

  constructor() { }

  ngOnInit() {
    let list: number[] = [4,3,9,12,13,2,1337,30,10,40,39.4]
    let emptyGraph1 = new Empty
    emptyGraph1 = emptyGraph1.incl(1, 500, 50)

    let result = list.forEach(function(elem) {
      emptyGraph1 = emptyGraph1.incl(elem, emptyGraph1.x, emptyGraph1.y)
    }
    )

   console.log(emptyGraph1.contains(9), emptyGraph1.contains(15), emptyGraph1.contains(3), emptyGraph1.contains(19))

   
   let completedGraph: Array<IntSet> = []
   function traverse(node: IntSet) {
    if(node instanceof NonEmpty) {
      completedGraph.push(node)
      traverse(node.left)
      traverse(node.right)
    }
   }
   traverse(emptyGraph1)
   console.log(emptyGraph1)
   console.log(completedGraph)
   completedGraph.forEach(function(elem){
     //console.log(elem)
   })

   this.globalCompletedGraph = completedGraph

  }
;
}
