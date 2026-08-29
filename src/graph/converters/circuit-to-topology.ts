import { TopologyGraph } from "../topology-graph";

// Very simple starter converter.
// It only adds nodes from the circuit JSON.
// More logic will be added step-by-step.

export function circuitToTopology(circuitJson: any): TopologyGraph {
  const graph = new TopologyGraph();

  if (Array.isArray(circuitJson?.components)) {
    for (const component of circuitJson.components) {
      if (component?.id) {
        graph.addNode(component.id);
      }
    }
  }

  return graph;
}
