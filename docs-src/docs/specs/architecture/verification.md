---
sidebar_position: 2
title: Verifying Agent Badges
hide_table_of_contents: true
---

# Verifying Agent Badges

<br /><br />
![Verification Architecture Diagram](/img/verification.png)
<br />

The above diagram depicts an example process enabling the lookup, identification and use of `ResolverMetadata` as well as verifying an `Agent Badge` associated to an Agent subject. The example process uses the AGNTCY's [`Agent Discovery Service (DS)`](https://docs.agntcy.org/pages/dir.html) as the means to discover an Agent with specific skills, and automatically identify and resolve the associated `Agent Badge`, irrespective of the type of identity used by the owner of the Agent (e.g., an Okta, Duo, AD, DID, or A2A ID).

A similar process can be followed in the case of MCP Servers or A2A Agents, but in those cases the discovery service may rely on the use of well-known addresses (URLs), or other hubs, external directories, or discovery services.

The following steps summarize the process:

1. An Agent Consumer may search for an Agent with given skills, e.g., using an ADS client, such as a CLI, a UI, or a headless interface in case the consumer is agentic itself.
2. A lookup is performed using the ADS.
3. A list of potential candidates are presented to the Agent Consumer.
4. The Agent Consumer selects the desired Agent.
5. Which now triggers the lookup of the selected Agent's definition (e.g., a definition based on an OASF schema), which contains the Agent ID (e.g., an Okta, Duo, AD, DID, or A2A ID).
6. The Agent definition is obtained and passed to the Resolver, which is one of the key elements of the AGNTCY's identity service.
7. The Resolver extracts the Agent ID from the Agent definition in step (7a), and performs a lookup process in an AGNTCY's Identity Node (IN) using the Agent ID as a key (see step (7b) in the diagram above).
8. The corresponding Agent Badge and ResolverMetadata object are now passed to the Resolver.
9. The Resolver provides trustworthy and automated means to resolve and verify the Agent subject. To this end, the Resolver proceeds as follows:

   - It uses the ResolverMetadata object to obtain the crypto method and PubKey to decrypt the ProofValue in the Agent Badge.
   - It decrypts the ProofValue and verifies the Agent Badge integrity, since, as shown in the examples [`here`](../../vc/agent-badge.md), the proof type is a `"DataIntegrityProof"`. This may include the computation of a digest, and comparison with a digest obtained after decryption.
   - It outputs the verification result and logs it.

10. The Verified Agent Badge is returned to the ADS client.
11. Which is forwarded to the to the Agent Consumer.

The AGNTCY plans to contribute open-source code to automate the process of resolving and verifying `Agent Badges` and `MCP Server Badges`, leveraging `ResolverMetadata` objects.
