---
sidebar_position: 1
---

# Definitions

The [`AGNTCY`](https://agntcy.org/) supports various types of identities, referred to as `IDs`, which serve as universally unique identifiers for the main entities or subjects operated by the [`AGNTCY`](https://agntcy.org/), including Agents, MCP Servers, and Multi-Agent Systems (MASs).

## Key Identifiers

Each `ID` is associated 1:1 with `ResolverMetadata`, which contains the necessary information to establish trust while trying to use or interact with an Agent, an MCP Server, or a MAS `ID`.

- `ID`: A universally unique identifier that represents the identity of a subject.

- `ResolverMetadata`: Metadata, represented in the form of a JSON-LD object, containing cryptographic material and assertion methods enabling to automatically resolve and establish trust with the associated `ID` (e.g., an Agent, an MCP Server, or a MAS).

Concrete examples with various `IDs` and associated `ResolverMetadata` can be found [`here`](./examples.md).
