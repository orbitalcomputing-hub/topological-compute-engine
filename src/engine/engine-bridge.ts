import { circuitToTopology } from "../graph/converters/circuit-to-topology";
import { TopologyGraph } from "../graph/topology-graph";

// The engine bridge connects external input to the converter.
// Later, this will handle validation, logging, and engine options.

export function processCircuit(circuitJson: any): TopologyGraph {
  return circuitToTopology(circuitJson);
}
