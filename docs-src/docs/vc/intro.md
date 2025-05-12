---
sidebar_position: 1
---

# Definitions

The [`AGNTCY`](https://agntcy.org/) supports various types of Verifiable Credentials (VCs). A verifiable credential is a structured and cryptographically verifiable way to express claims made by an issuer. These claims can pertain to:

- Agent definitions (e.g., an [`OASF definition`](https://docs.agntcy.org/pages/oasf.html) or an [`A2A Agent Card`](https://google.github.io/A2A/specification/agent-card/))
- Deployment configurations
- Authorization assertions used in processes such as Multi-Factor Authentication (MFA)

## Key Verifiable Credentials (VCs)

Among some of the key `VCs` within the [`AGNTCY`](https://agntcy.org/) are the following:

- **`Agent Badge:`** An enveloped `VC`, captured in the form of a JSON-LD object, that represents a specific definition of an Agent subject in the IoA. The definition follows a given schema (e.g., an OASF definition or an A2A Agent Card schema). An Agent subject could have multiple Agent Badges, each representing a different definition of the same core Agent or Agent subject. For instance, different software versions and/or patched releases of an Agent will have different Agent Badges. The same applies if the Agent's code is available in different forms (e.g, if it can be used and composed using different types of artifacts, such as a Docker container image or a python package), or if the source code can be reached at different sites or routing locators (e.g., through github or sites like hugging face), etc. Concrete examples of an Agent Badge can be found [`here`](../vc/agent-badge.md).<br />

- **`MCP Server Badge:`** Also an enveloped `VC`, captured in the form of a JSON-LD object, that represents a specific definition of an MCP Server subject in the IoA. The definition should follow a given schema (e.g., a json specification following a similar approach to A2A's card but for MCP Servers). Like in the case of an Agent subject, an MCP Server could have multiple MCP Server Badges, each representing a different definition of the same core MCP Server subject. For instance, different software versions and/or patched releases of an MCP Server will have different MCP Server Badges. A concrete example of an MCP Server Badge can be found [`here`](../vc/mcp.md).

The identity framework conceived by the `AGNTCY` allows not only to cryptographically bind an Agent ID to an ISSUER, a public key and a proof of provenance but also the binding of the same Agent `ID` to different definitions of the core Agent, including different schemas, versions, locators, etc., as well as additional `VCs` that may be used during Multi-Factor AuthN/AuthZ (MFA) processes. The same approach applies to MCP Servers.

<br />

:::tip[Why it matters?]

The combined use of Badges (VCs) and ResolverMetadata enables automated and trustworthy validation of:

- Issuer public keys, via assertion methods
- Authenticity and integrity of credentials (Agent or MCP Server Badges)
- Entity provenance and update lineage (especially critical for secure versioning)

**Benefits of This Model**

- Prevents impersonation of Agents, and MCP Server resources and tools by ensuring provenance can be verified
- Enables secure versioning and traceability, supporting safe upgrades and patching
- Facilitates advanced authentication and authorization workflows, including those involving:<br /><br />
  - Dynamic trust establishment
  - Machine-to-machine negotiation (with or without human input)
  - Pre-connection credential validation

These capabilities apply equally to Agents and MCP Servers, supporting trust-aware composition and interaction across the IoA.
:::
