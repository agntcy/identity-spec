---
sidebar_position: 1
---

# Introduction

## Identity in the AGNTCY

### 1. Introduction

Secure and reliable communication between software agents is a cornerstone of the Internet of Agents (IoA) vision. Just as humans rely on official identification (e.g., driver's licenses) for trusted real-world interactions, agents in a digital ecosystem require verifiable credentials to authenticate their identity.

Without proper identity management, malicious or unverified agents can infiltrate Multi-Agent Systems (MASs), leading to misinformation, fraud, or security breaches. To mitigate these risks, the [`AGNTCY`](https://agntcy.org/) provides a standardized and consistent framework for authenticating agents and validating associated metadata.

This framework applies equally to:

- Agents
- Model Context Protocol (MCP) Servers
- MASs (Multi-Agent Systems)

Each plays a critical role in the architecture and operation of an IoA and must comply with shared identity and authentication principles.


### 2. Identity Requirements

The AGNTCY defines identity assignment with the following core properties:

- **Open:** No centralized authority is required for assigning identities
- **Collision-free:** Each entity (Agent, MCP Server, or  MAS) has a universally unique identifier.
- **Verifiable:** Each entity is backed by a Verifiable Credential (VC) that can be used to authenticate its ID and provenance.

### 3. Identity Assignment Approaches 

- The AGNTCY supports both conventions and standards for identity assignment.
- This approach promotes interoperability across varied systems and ecosystems.
- This also allows for flexible integration while ensuring consistent methods for assigning and verifying identifiers.

#### 3.1 Conventions

AGNTCY currently supports the following two types of conventions for identity assignment.

#### 3.1.1 Identity Provider (IdP) Accounts

The use of `User Accounts` and/or `Service Accounts` provided by an Identity Provider (IdP). Identities provided through Okta, Microsoft AD, Entra ID, Duo, Ping Identity, Auth0, or Google ID can be used in the context of AGNTCY to assign universally unique identifiers to Agents, MCP Servers, and MASs in a open way.

#### 3.1.2 Well-Known Identifiers

The use of `well-known identifiers`, e.g., following the convention proposed by Google's Agent2Agent (A2A) protocol. This convention enables both open identity assignment as well as the use of universally unique identifiers for Agent Cards, which capture the metadata and characteristics that define, allow to discover, and identify an Agent within the A2A ecosystem. More specifically, in the A2A protocol, the Agent Card standardizes the format of the data shared during discovery processes, which may be facilitated by hosting the Agent Card at a well-known path or identifier, such as: `https://YOUR-DOMAIN/.well-known/agent.json`. In this case, the Agent Card includes details such as the Agent's capabilities, authentication requirements, and endpoint information.

#### 3.2 Standards

AGNTCY supports the use of W3C [`Decentralized Identifiers (DIDs)`](https://www.w3.org/TR/did-1.1/) and associated standards, including:

- DID Documents for managing identifier metadata
- [`Verifiable Credentials (VCs)`](https://www.w3.org/TR/vc-data-model-2.0/) for cryptographic validation
- Decentralized networks for publishing and resolving identities

This approach enables:

- Decentralized identity management
- Multi-factor Authentication and Authorization processes across these entities as well as between them and humans.
- Verifiable attributes (skills, versions, roles, etc.)

<br />

:::tip[IMPORTANT]
Independently of whether the identity is assigned following a convention or a standardized framework, at this stage the main focus of the [`AGNTCY`](https://agntcy.org/) is to provide a common and trustworthy mechanism to **present identifiers** and to **verify them**. More specifically, the [`AGNTCY`](https://agntcy.org/) not only supports various (and heterogeneous) identifiers that are universally unique but also proposes a standard way of presenting and verifying such identifiers, thereby enabling freedom in the selection of interoperable identities in an IoA.
:::

<br />

### 4. Agent Identity Structure

<br />

![1](/img/agent-badge.png)

<br />

The figure above depicts the main elements of an Agent's subject identifier:

- Each Agent subject has a universally unique identifier named [`ID`](./id/definitions.md) (see examples [`here`](./id/examples.md)).
- Each `ID` is associated 1:1 to a [`ResolverMetadata`](./id/definitions.md) object, enabling automated resolution and trustworthy verification of Agent IDs (see examples [`here`](./id/examples.md)).
- Each `ID` is also associated 1:n to an [`Agent Badge`](./vc/intro.md) (see examples [`here`](./vc/agent-badge.md)).

Hence, in the [`AGNTCY`](https://agntcy.org/), an Agent subject is tied to a unique identifier linked to one or more `Verifiable Credentials (VCs)`, which contain information about the Agent, such as its ID, a schema definition (e.g., an [`OASF schema`](https://docs.agntcy.org/pages/oasf.html)), and other metadata used for defining locators, authentication, MFA, etc. Agents can use this Badge for secure presentation, verification, and enabling trust across multi-agent systems.

Note:  This same structure applies to MCP Servers and MASs, ensuring consistency across all identity-bearing entities in the IoA.

<!---
## About the AGNTCY

The [`AGNTCY`](https://agntcy.org/) offers an open source collective for inter-agent collaboration. More specifically, the [`AGNTCY`](https://agntcy.org/) is where we are building the Internet of Agents (IoA), in an effort to ensure open collaboration among agents in a way that is accessible to all. To this end, the [`AGNTCY`](https://agntcy.org/) provides a collaborative space to innovate, develop, and maintain software components and services for agentic workflows and multi-agent applications.

Among the various initiatives within the [`AGNTCY`](https://agntcy.org/) is the definition, maintenance, and trustworthy use of identities for agents. The open nature of the [`AGNTCY`](https://agntcy.org/) aims not only to ensure that different types of identities can coexist and be used but also that they can be either standardized or become de facto standards.

To this end, each Agent subject has a unique identifier, which needs to be included in an Agent Badge. Hence, in the [`AGNTCY`](https://agntcy.org/), an Agent is tied to a unique and persistent identifier linked to an Agent Passport. The Agent Passport is itself a `Verifiable Credential (VC)` that contains information about the Agent, such as its ID, a schema definition (e.g., an OASF schema), and other metadata used for defining locators, authentication, MFA, etc. Agents can use this Passport for secure presentation, verification, and enabling trusted communications across multi-agent systems.

Within the [`AGNTCY`](https://agntcy.org/), there is a distributed network of Identity Nodes that operate as trust anchors for presenting and verifying the identity of the Agents issued by any organization, and ensure secure and trustworthy interactions among Agents. The following figure summarizes the concept of the Agent Passport and its main elements. For a detailed example of an Agent Passport using DIDs, please refer to: [Agent Passport example](./vc/agent-passport.md)

-->
