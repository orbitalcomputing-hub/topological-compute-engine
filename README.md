# Topological Compute Engine

A beginner-friendly TypeScript engine that converts circuit JSON into a simple topology graph.

## Features
- Add nodes to a graph
- Convert circuit JSON into a graph
- Process circuits through an engine bridge

## Usage

```ts
import { processCircuit } from "topological-compute-engine";

const circuit = {
  components: [
    { id: "R1" },
    { id: "C1" }
  ]
};

const graph = processCircuit(circuit);
console.log(graph.nodes);
