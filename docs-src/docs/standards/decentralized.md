---
sidebar_position: 1
---

# Decentralized Identity

:::tip[Important]

The concepts of `DIDs` and `VCs`, along with the set of standards defined by the W3C consortium represent **a standardized option** for assigning, presenting, resolving, and verifying the Agents' identities in an open and decentralized manner. 

It is worth highlighting that although the `Identity` platform conceived by the [`AGNTCY`](https://agntcy.org/) could leverage some of these concepts and standards, the Agent identities managed by, or through the [`AGNTCY`](https://agntcy.org/), <u>**are by no means limited to, or constrained by these standards**</u>. Indeed, the key concept leveraged by the [`AGNTCY`](https://agntcy.org/) is the use of `VCs`, particularly, with the aim of creating, presenting, and securely verifying Agent Badges (see: [`Agent Badge example`](../vc/agent-badge.md)).

:::

## Relevant Standard Drafts

While `Decentralized Identities` have primarily focused on providing individuals and organizations with greater control over their data and digital identities, this concept can be leveraged to assign identities to Agents.

A set of key standards have been developed by the [World Wide Web Consortium (W3C)](https://www.w3.org/) to ensure interoperability, security, and reliability in the assignment, presentation, and verification of decentralized identities. These standards include:

### [Decentralized Identifiers (DIDs) v1.1](https://www.w3.org/TR/did-1.1/)

- **Purpose**: `DIDs` are a type of identifier that enables self-sovereign assignment of digital identities in such a way that they are cryptographically verifiable. Unlike centralized identifiers, `DIDs` are not controlled by any single organization.
- **Structure**: `DIDs` consist of a URI scheme that supports decentralized identity management. They are designed to be universally unique and resolvable, and they can be used across different administrative domains and systems.
- **Use Cases**: `DIDs` can be used to identify entities such as individuals, organizations, devices, and Agents in a decentralized manner, enabling privacy and control over identity data.

### [Verifiable Credentials (VCs) v2.0](https://www.w3.org/TR/vc-data-model-2.0/)

- **Purpose**: `VCs` allow individuals, organizations, and Agents to present information in a secure, privacy-preserving, and machine-verifiable way. They are the digital equivalent of physical credentials, such as a driver's licenses, university degrees, ownership of a property, or an Agent's provenance.
- **Structure**: `VCs` consist of claims made by an issuer about a subject (e.g., an Agent), and they are cryptographically signed to ensure authenticity and integrity.
- **Benefits**: `VCs` enhance trust between parties by allowing credential holders to prove claims without disclosing sensitive information.