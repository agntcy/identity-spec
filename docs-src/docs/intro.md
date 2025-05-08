---
sidebar_position: 1
---

# Introduction

## Identity in the AGNTCY

Ensuring secure and dependable communication between software agents is vital for building a trustworthy Internet of Agents (IoA). Much like humans use official documents, such as driver licenses to authenticate themselves in real-world interactions, software agents require reliable and verifiable credentials to confirm their identity and build trust with other agents and humans. Without effective authentication, unverified or malicious agents could disrupt any Multi-Agent System (MAS) or network of agents, potentially causing misinformation, fraud, or security vulnerabilities. Thus, a consistent and standardized approach for authenticating agents and validating their metadata is critical for fostering secure and reliable interactions across an IoA. These authentication and validation requirements also apply to Model Context Protocol (MCP) Servers and MASs, since these are positioned as building blocks, and aggregation elements, in an IoA, respectively.

### Identity Requirements

The [`AGNTCY`](https://agntcy.org/) enables the assignment of identities to Agents, MCP Servers, and MASs in a way that is:

- **Open:** No central authority is in charge of assigning IDs.
- **Collision-free:** Each Agent, MCP Server, and MAS has a universally unique identifier.
- **Verifiable:** Each Agent, MCP Server, and MAS is associated to a Verifiable Credential (VC) that can be used to authenticate its ID and provenance.

### Supporting both Conventions and Standards for ID assignment

The [`AGNTCY`](https://agntcy.org/) prescribes neither the use of a specific identity assignment technique nor the use of a specific identity format. Instead, the [`AGNTCY`](https://agntcy.org/) enables the use and amalgamation of various (heterogeneous) identity types, while ensuring a common or standard way to:

- Present identifiers
- Verify identifiers

irrespective of their identity type. To this end, the [`AGNTCY`](https://agntcy.org/) supports the use of conventions as well as the use of standards to openly assign an identity to an Agent, an MCP Server, or a MAS.

#### Conventions

As a starting point, the [`AGNTCY`](https://agntcy.org/) supports two types of conventions for identity assignment:

1. The use of `User Accounts` and/or `Service Accounts` provided by an Identity Provider (IdP). Identities provided through Okta, Microsoft AD, Entra ID, Duo, Ping Identity, Auth0, or Google ID can be used in the context of [`AGNTCY`](https://agntcy.org/) to assign universally unique identifiers to Agents, MCP Servers, and MASs in a open way.

2. The use of `well-known identifiers`, e.g., following the convention proposed by Google's Agent2Agent (A2A) protocol. This convention enables both open identity assignment as well as the use of universally unique identifiers for Agent Cards, which capture the metadata and characteristics that define, allow to discover, and identify an Agent within the A2A ecosystem. More specifically, in the A2A protocol, the Agent Card standardizes the format of the data shared during discovery processes, which may be facilitated by hosting the Agent Card at a well-known path or identifier, such as: `https://YOUR-DOMAIN/.well-known/agent.json`. In this case, the Agent Card includes details such as the Agent's capabilities, authentication requirements, and endpoint information.

#### Standards

Similarly, as a starting point, the [`AGNTCY`](https://agntcy.org/) supports one standard for identity assignment:

1. The use of W3C [`Decentralized Identifiers (DIDs)`](https://www.w3.org/TR/did-1.1/). The W3C standards have done ground work in the context of decentralized identifiers, decentralized credential management, and the capacity to generate, authenticate, and selectively disclose [`Verifiable Credentials (VCs)`](https://www.w3.org/TR/vc-data-model-2.0/). This approach allows organizations to assign universally unique identifiers to their Agents, MCP Servers, and MASs in a open and decentralized manner. Moreover, the identities can be stored in decentralized networks along with a set of associated VCs, which can be utilized to cryptographically verify the provenance of the Agents, MCP Servers, and MASs, their versions, their skills and other attributes and features, thereby facilitating secure multi-factor authentication (MFA) and authorization processes across these entities as well as between them and humans.

<br />

:::tip[IMPORTANT]
Independently of whether the identity is assigned following a convention or a standardized framework, at this stage the main focus of the [`AGNTCY`](https://agntcy.org/) is to provide a common and trustworthy mechanism to **present identifiers** and to **verify them**. More specifically, the [`AGNTCY`](https://agntcy.org/) not only supports various (and heterogeneous) identifiers that are universally unique but also proposes a standard way of presenting and verifying such identifiers, thereby enabling freedom in the selection of interoperable identities in an IoA.
:::

## Identity for Agents

<br />

![1](/img/agent-badge.png)

<br />

The figure above depicts the main elements of an Agent's subject identifier:

- Each Agent subject has a universally unique identifier named [`ID`](./id/definitions.md) (see examples [`here`](./id/examples.md)).
- Each `ID` is associated 1:1 to a [`ResolverMetadata`](./id/definitions.md) object, enabling automated resolution and trustworthy verification of Agent IDs (see examples [`here`](./id/examples.md)).
- Each `ID` is also associated 1:n to an [`Agent Badge`](./vc/intro.md) (see examples [`here`](./vc/agent-badge.md)).

Hence, in the [`AGNTCY`](https://agntcy.org/), an Agent subject is tied to a unique identifier linked to one or more `Verifiable Credentials (VCs)`, which contain information about the Agent, such as its ID, a schema definition (e.g., an [`OASF schema`](https://docs.agntcy.org/pages/oasf.html)), and other metadata used for defining locators, authentication, MFA, etc. Agents can use this Badge for secure presentation, verification, and enabling trust across multi-agent systems.

Note that the same approach applies to MCP Servers and MASs, giving rise to ResolverMetadata and Badges also for MCP Servers and MASs.

<!---
## About the AGNTCY

The [`AGNTCY`](https://agntcy.org/) offers an open source collective for inter-agent collaboration. More specifically, the [`AGNTCY`](https://agntcy.org/) is where we are building the Internet of Agents (IoA), in an effort to ensure open collaboration among agents in a way that is accessible to all. To this end, the [`AGNTCY`](https://agntcy.org/) provides a collaborative space to innovate, develop, and maintain software components and services for agentic workflows and multi-agent applications.

Among the various initiatives within the [`AGNTCY`](https://agntcy.org/) is the definition, maintenance, and trustworthy use of identities for agents. The open nature of the [`AGNTCY`](https://agntcy.org/) aims not only to ensure that different types of identities can coexist and be used but also that they can be either standardized or become de facto standards.

To this end, each Agent subject has a unique identifier, which needs to be included in an Agent Badge. Hence, in the [`AGNTCY`](https://agntcy.org/), an Agent is tied to a unique and persistent identifier linked to an Agent Passport. The Agent Passport is itself a `Verifiable Credential (VC)` that contains information about the Agent, such as its ID, a schema definition (e.g., an OASF schema), and other metadata used for defining locators, authentication, MFA, etc. Agents can use this Passport for secure presentation, verification, and enabling trusted communications across multi-agent systems.

Within the [`AGNTCY`](https://agntcy.org/), there is a distributed network of Identity Nodes that operate as trust anchors for presenting and verifying the identity of the Agents issued by any organization, and ensure secure and trustworthy interactions among Agents. The following figure summarizes the concept of the Agent Passport and its main elements. For a detailed example of an Agent Passport using DIDs, please refer to: [Agent Passport example](./vc/agent-passport.md)

-->
