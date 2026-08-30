import { circuitToTopology } from "../src/graph/converters/circuit-to-topology.ts";

const sampleCircuit = {
  components: [
    { id: "A1" },
    { id: "B2" }
  ]
};

test("converter adds nodes from circuit JSON", () => {
  const graph = circuitToTopology(sampleCircuit);

  expect(graph.nodes.length).toBe(2);
  expect(graph.nodes.map(n => n.id)).toContain("A1");
  expect(graph.nodes.map(n => n.id)).toContain("B2");
});
