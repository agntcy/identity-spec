---
sidebar_position: 1
---

# Introduction

## Identity in the AGNTCY

Ensuring secure and dependable communication between software agents is vital for building a trustworthy IoA. Much like humans use official documents, such as driver licenses to authenticate themselves in real-world interactions, software agents require reliable and verifiable credentials to confirm their identity and build trust with other agents and humans. Without effective authentication, unverified or malicious agents could disrupt any multi-agent application or network of agents, potentially causing misinformation, fraud, or security vulnerabilities. Thus, a consistent and standardized approach to authenticating agents and validating their metadata is critical for fostering secure and reliable interactions across an IoA.

### Agent Identity Requirements

The [`AGNTCY`](https://agntcy.org/) enables the assignment of identities to Agents in a way that is:

- **Open:** No central authority is in charge of assigning IDs to Agents.
- **Collision-free:** Each Agent has a universally unique identifier.
- **Verifiable:** Each Agent is associated to a Verifiable Credential (VC) that can be used to Authenticate the ID of the Agent.

### Supporting both Conventions and Standards for Agent ID assignment

The [`AGNTCY`](https://agntcy.org/) prescribes neither the use of a specific identity assignment technique nor the use of a specific identity format. Instead, the [`AGNTCY`](https://agntcy.org/) enables the use and amalgamation of various (heterogeneous) identity types, while ensuring a common or standard way to:

- Present Agent identifiers
- Verify Agent identifiers

irrespective of their identity type. To this end, the [`AGNTCY`](https://agntcy.org/) supports the use of conventions as well as the use of standards to openly assign identity to Agents.

#### Conventions

As a starting point, the [`AGNTCY`](https://agntcy.org/) supports two types of conventions for identity assignment:

1. The use of `User Accounts` and/or `Service Accounts` provided by an Identity Provider (IdP). Identities to agents provided in the context of Okta, Microsoft AD, Entra ID, Duo, Ping Identity, Auth0, or Google ID can be used in the context of [`AGNTCY`](https://agntcy.org/) to assign universally unique identifiers to Agents in a open way.

2. The use of `well-known identifiers`, e.g., following the convention proposed by Google's Agent2Agent (A2A) protocol. This convention enables both open identity assignment as well as the use of universally unique identifiers for Agent Cards, which capture the metadata and characteristics that define, and allow to discover and identify an Agent within the A2A ecosystem. More specifically, in the A2A protocol, the Agent Card standardizes the format of the data shared during discovery, which may be facilitated by hosting the Agent Card at a well-known path or identifier, such as: https://YOUR-DOMAIN/.well-known/agent.json. In this case, the Agent Card includes details such as the Agent's capabilities, authentication requirements, and endpoint information.

#### Standards

Similarly, as a starting point, the [`AGNTCY`](https://agntcy.org/) supports one standard for identity assignment:

1. The use of W3C [`Decentralized Identifiers (DIDs)`](https://www.w3.org/TR/did-1.1/). The W3C standards have done ground work in the context of decentralized identifiers, decentralized credential management, and the capacity to generate, authenticate, and selectively disclose [`Verifiable Credentials (VCs)`](https://www.w3.org/TR/vc-data-model-2.0/). This approach allows organizations to assign universally unique identifiers to their Agents in a open and decentralized manner. Moreover, the identity of the Agents can be stored in decentralized networks along with a set of associated VCs, which can be utilized to verify the provenance of the Agents, their versions, their skills and other attributes and features, thereby facilitating secure multi-factor authentication (MFA) and authorization processes between agents as well as between agents and humans.

<br />

:::tip[IMPORTANT]
Independently of whether the Agent identity is assigned following a convention or a standardized framework, at this stage the main focus of the [`AGNTCY`](https://agntcy.org/) is to provide a common and trustworthy mechanism to **present Agent identifiers** and to **verify them**. More specifically, the [`AGNTCY`](https://agntcy.org/) not only supports various (and heterogeneous) Agent identifiers that are universally unique but also proposes a standard way of presenting and verifying such identifiers, thereby enabling freedom in the selection of interoperable identities in an IoA.
:::

## Identity for Agents

<br />

![1](/img/agent-badge.png)

<br />

The figure above depicts the main elements of an Agent's subject identifier:

- Each Agent subject has a universally unique identifier named [`ID`](./id/definitions.md).
- Each `ID` is associated 1:1 to a [`ResolverMetadata`](./id/definitions.md) object, enabling automated resolution and trustworthy verification of Agent IDs.
- Each `ID` is also associated 1:n to an [`Agent Badge`](./vc/intro.md).

Hence, in the [`AGNTCY`](https://agntcy.org/), an Agent subject is tied to a unique identifier linked to one or more `Verifiable Credentials (VCs)`, which contain information about the Agent, such as its ID, a schema definition (e.g., an OASF schema), and other metadata used for defining locators, authentication, MFA, etc. Agents can use this Badge for secure presentation, verification, and enabling trusted communications across multi-agent systems.

<!---
## About the AGNTCY

The [`AGNTCY`](https://agntcy.org/) offers an open source collective for inter-agent collaboration. More specifically, the [`AGNTCY`](https://agntcy.org/) is where we are building the Internet of Agents (IoA), in an effort to ensure open collaboration among agents in a way that is accessible to all. To this end, the [`AGNTCY`](https://agntcy.org/) provides a collaborative space to innovate, develop, and maintain software components and services for agentic workflows and multi-agent applications.

Among the various initiatives within the [`AGNTCY`](https://agntcy.org/) is the definition, maintenance, and trustworthy use of identities for agents. The open nature of the [`AGNTCY`](https://agntcy.org/) aims not only to ensure that different types of identities can coexist and be used but also that they can be either standardized or become de facto standards.

To this end, each Agent subject has a unique identifier, which needs to be included in an Agent Badge. Hence, in the [`AGNTCY`](https://agntcy.org/), an Agent is tied to a unique and persistent identifier linked to an Agent Passport. The Agent Passport is itself a `Verifiable Credential (VC)` that contains information about the Agent, such as its ID, a schema definition (e.g., an OASF schema), and other metadata used for defining locators, authentication, MFA, etc. Agents can use this Passport for secure presentation, verification, and enabling trusted communications across multi-agent systems.

Within the [`AGNTCY`](https://agntcy.org/), there is a distributed network of Identity Nodes that operate as trust anchors for presenting and verifying the identity of the Agents issued by any organization, and ensure secure and trustworthy interactions among Agents. The following figure summarizes the concept of the Agent Passport and its main elements. For a detailed example of an Agent Passport using DIDs, please refer to: [Agent Passport example](./vc/agent-passport.md)

-->
