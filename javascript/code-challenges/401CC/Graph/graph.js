' use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }

}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }
}
