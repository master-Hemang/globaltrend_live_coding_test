class PriorityQueue{
    constructor(){
        this.items = [];
    }

enqueue(element,priority){
    const queueElement = 
    { element , priority};
    let added =false;
    for (let i=0;i<this.items.length;i++){
        if (queueElement.priority<this.items[i].priority){
            this.items.splice(i,1,queueElement);
            added=true;
            break;
        }
    }
    if (!added){
        this.items.push(queueElement);
    }
}
dequeue(){
    if(this.isEmpty()){
        return null;
    }
    return this.items.shift();
}
isEmpty(){
    return this.items.length===0;
}
}
function dijkstra(graph , startVertex){
    const distances={};
    const prevVertices={};
    const pq=new PriorityQueue();
    for(const vertex in graph){
        distances[vertex]=vertex===startVertex ? 0 : Infinity;
        pq.enqueue(vertex,distances[vertex]);
        prevVertices[vertex]=null;
    }

    while (!pq.isEmpty()){
        const { element : currentVertex } = pq.dequeue();
        for (const neighbor in graph [currentVertex]){
            const distance= graph [currentVertex][neighbor];
            const newDistance=distances[currentVertex]+distance;

            if(newDistance<distances[neighbor]){
                distances[neighbor]=newDistance;
                prevVertices[neighbor]=currentVertex;
                pq.enqueue(neighbor,newDistance);
            }
        }
    }
    return {distances , prevVertices};
}
const graph = {
    0: {1: 4, 2: 1}, 
    1: {3: 1}, 
    2: {1: 2, 3: 5}, 
    3: {}
};
const source = 0;
const result =dijkstra(graph,source);

console.log('Distances:',result.distances);
console.log('Previous vertices:',result.prevVertices);