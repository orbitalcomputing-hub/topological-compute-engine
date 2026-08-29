import { processCircuit } from "../src/engine/engine-bridge";

const sampleCircuit = {
  components: [
    { id: "R1" },
    { id: "C1" },
    { id: "U1" }
  ]
};

test("graph contains nodes from circuit", () => {
  const graph = processCircuit(sampleCircuit);

  expect(graph.nodes.length).toBe(3);
  expect(graph.nodes.map(n => n.id)).toContain("R1");
  expect(graph.nodes.map(n => n.id)).toContain("C1");
  expect(graph.nodes.map(n => n.id)).toContain("U1");
});
