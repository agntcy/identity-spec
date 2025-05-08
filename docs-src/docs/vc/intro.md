---
sidebar_position: 1
---

# Definitions

The [`AGNTCY`](https://agntcy.org/) supports various types of verifiable credentials, referred to as `VCs`. A verifiable credential is a specific way to express and present a set of claims made by an issuer, such as an agent definition (e.g., an [`OASF Definition`](https://docs.agntcy.org/pages/oasf.html), or an [`A2A Agent Card`](https://google.github.io/A2A/specification/agent-card/)), a deployment configuration, or an authorization claim that could be used during a MFA process.

## Key Verifiable Credentials (VCs)

Among some of the key `VCs` within the [`AGNTCY`](https://agntcy.org/) are the following:

- **`Agent Badge:`** An enveloped `VC`, captured in the form of a JSON-LD object, that represents a specific definition of an Agent subject in the IoA. The definition follows a given schema (e.g., an OASF definition or an A2A Agent Card schema). An Agent subject could have multiple Agent Badges, each representing a different definition of the same core Agent or Agent subject. For instance, different software versions and/or patched releases of an Agent will have different Agent Badges. The same applies if the Agent's code is available in different forms (e.g, if it can be used and composed using different types of artifacts, such as a Docker container image or a python package), or if the source code can be reached at different sites or routing locators (e.g., through github or sites like hugging face), etc. Concrete examples of an Agent Badge can be found [`here`](../vc/agent-badge.md).<br />

- **`MCP Server Badge:`** Also an enveloped `VC`, captured in the form of a JSON-LD object, that represents a specific definition of an MCP Server subject in the IoA. The definition should follow a given schema (e.g., a json specification following a similar approach to A2A's card but for MCP Servers). Like in the case of an Agent subject, an MCP Server could have multiple MCP Server Badges, each representing a different definition of the same core MCP Server subject. For instance, different software versions and/or patched releases of an MCP Server will have different MCP Server Badges. A concrete example of an MCP Server Badge can be found [`here`](../vc/mcp.md).

<!---
- `Agent Passport`: An enveloped `VC`, captured in the form of a JSON-LD object, that represents an Agent subject in the IoA. While an Agent subject could have "n" different Agent Badges or definitions, it will be associated to one "Agent Passport", which in turn will be associated to single Agent `ID`. Hence, there is:

  - An n:1 relationship between Agent Badges and an Agent Passport
  - A 1:1 relationship between an Agent Passport and an Agent `ID`
  - A common element that binds Agent Badges and an Agent Passport, which is the same Agent `ID`.

More specifically, the role of the "Agent Passport" is to cryptographically bind an Agent ID to an ISSUER, a public key and a proof of provenance, while the role of the Agent Badges is to enable the binding of the same Agent `ID` to different definitions of the core Agent, including different schemas, versions, locators, etc., as well as to additional `VCs` that may be used during Multi-Factor AuthN/AuthZ (MFA) processes. A concrete example of an Agent Passport can be found [`here`](../vc/agent-passport.md).

-->

The identity framework conceived by the `AGNTCY` allows not only to cryptographically bind an Agent ID to an ISSUER, a public key and a proof of provenance but also the binding of the same Agent `ID` to different definitions of the core Agent, including different schemas, versions, locators, etc., as well as additional `VCs` that may be used during Multi-Factor AuthN/AuthZ (MFA) processes. The same approach applies to MCP Servers.

<br />

:::tip[IMPORTANT]
As detailed in the [`Agent Badge Examples`](../vc/agent-badge.md), the combined use of an `Agent Badge` with `ResolverMetadata` objects enables the automatic and trustworthy discovery not only of the PubKey associated to the Agent issuer but also of the verification material to prove the authenticity and integrity of the Agent Badge, according to the assertionMethod defined in the `ResolverMetadata` object.

Furthermore, the use of Agent Badges provides a set of key properties in an IoA:

1. It addresses the problem of **Agent impersonation**, by avoiding scenarios where one organization could offer rogue Agents as if they were created by another (trusted) company.
2. It enables **trustworthy origination, traceability, and lineage of Agents**. Note that Agents will end up having different versions and releases (e.g., due to security patches and updates), so while a company might be using version 2.08 of Agent `ID` = X, another company might be using version 2.10 of Agent Agent `ID` = X. Knowing that there is a key vulnerability and recommended upgrade for Agent `ID` = X, version 2.08, would allow the first company to migrate to version 2.10, while inform the second company that the upgrade is not needed.
3. It **enables more sophisticated AuthN and AuthZ processes among agents with and without a human in the loop**, including the **capacity to build trust even before an Agent is selected and used**. In subsequent updates to this documentation, the [`AGNTCY`](https://agntcy.org/) will provide examples involving MFA and how to build trust dynamically among Agents.

Note that the above remarks apply also to MCP Servers, since the combined use of `MCP Server Badges` with `ResolverMetadata` objects helps preventing MCP Server impersonation, and enables trustworthy origination and traceability of MCP Servers as well as advanced AuthN/AuthZ processes.
