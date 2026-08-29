// Very simple starter graph model.
// This will grow step-by-step as we learn GitHub and TypeScript.

export type TopologyNode = {
  id: string;
};

export type TopologyEdge = {
  from: string;
  to: string;
};

export class TopologyGraph {
  nodes: TopologyNode[] = [];
  edges: TopologyEdge[] = [];

  addNode(id: string) {
    this.nodes.push({ id });
  }

  addEdge(from: string, to: string) {
    this.edges.push({ from, to });
  }
}
