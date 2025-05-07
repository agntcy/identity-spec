---
sidebar_position: 1
title: Generating Agent Badges
hide_table_of_contents: true
---

# Generating Agent Badges


<br />
![Issuing Architecture Diagram](/img/issuing.png)
<br />

The above diagram depicts the process for generating and storing a `Verifiable Agent Badge` along with a `ResolverMetadata` object associated to an Agent subject. A similar process can be followed to generate a Verifiable MCP Server Badge or a Verifiable MAS Badge.

- The top left of the image shows that an organization may have several sub-organizations, each of which may create its own Agent subjects.  
- As described in the [`examples`](../../id/examples.md), each Agent subject will be associated to an Agent ID. More specifically, the [`AGNCTY`](http:///agntcy.org/) enables organizations to bring their own identities for their Agents (e.g., identities created via Okta, Duo, or A2A) as well as the capacity to generate an identity via the AGNTCY (e.g., using DIDs).    
- Each Agent subject is required to use a schema to create an Agent definition (e.g., using an [`OASF schema`](https://docs.agntcy.org/pages/oasf.html) or an A2A [`Agent Card`](https://google.github.io/A2A/specification/agent-card/)). The Agent ID must be included in the Agent Definition (see examples of Agent IDs [`here`](../../id/examples.md)).    
- Each organization or sub-organization may create public and private key pairs, and store the private keys (PrvKeys) on their wallet or vault of choice, or other means enabling secure access to the PrvKeys.  
- A PrvKey owned and managed by an organization or sub-organization is required to create a ProofValue of the Agent Definition. As described in detail in the [`Agent Badge Examples`](../../vc/agent-badge.md), the Agent Definition, the ProofValue, and additional metadata are used to create a Verifiable Credential in the form of a `Verifiable Agent Badge`. Also note that, specific metadata, such as a verification method, an assertion method, and a service endpoint are used to create a `ResolverMetadata` object that is associated to the `ID` and the `Verifiable Agent Badge`. Note that embedding the PubKey in the `ResolverMetadata` object itself is optional, since the metadata supplied allows for automated access and verification of the PubKey (e.g., using a JWK as part of a JWT header).
- The `ResolverMetadata` along with the `Verifiable Agent Badge` can be stored in Identity Nodes (INs) that can operate as trust anchors. In subsequent updates to this documentation, the AGNTCY shall provide more detailed recommendations about the INs, and their role and capacity to operate as decentralized trust anchors, especially, to:

    - Build trust during MAS composition involving third-party Agents and MCP Servers.
    - Link and automate the dynamic and trustworthy discovery of running Agents and MCP Servers to their corresponding AuthN and delegated AuthZ methods, including MFA in a MAS.      

- The AGNTCY considers the possibility that organizations and their sub-organizations may register with the INs (e.g., to brand and ensure the origin of their Agents). This may include means to store and bind an organization/sub-organization to a PubKey, the IDs for the various subjects that they might register (e.g., Agents and MCP Servers), their corresponding `ResolverMetadata` objects and `Badges`, as well as additional sets of VCs for each of them.

The AGNTCY plans to contribute open-source code to automate the process of creating and storing `ResolverMetadata` objects, `Agent Badges`, and `MCP Server Badges`. 