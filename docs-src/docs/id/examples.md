---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Examples

## 1) IdP Examples (Okta and Duo)

### 1.a) Okta Example of an Agent ID

#### ID

```text
ID: OKTA-APP_ID
```

where `ID` represents a universally unique identifier associated to an Agent subject (e.g., an Okta Application ID in this case).

#### ResolverMetadata

The `ResolverMetadata` is represented as a JSON-LD object comprising the following elements:

```json
ResolverMetadata
{
  id: "OKTA-APP_ID",
  assertionMethod: [{
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://OKTA_TENANT_NAME.okta.com/"
  }]
}
```

where:

- `assertionMethod`: contains the method, e.g., a JSON Web key (JWK), and in some cases, may also contain the public key that can be used to verify the [`Verifiable Credentials`](/docs/vc/intro). JWKs are commonly used for signing and verifying JWTs (JSON Web Tokens). Note that while a JWK will typically contain the crypto material encoding the public key itself (e.g., the RSA's modulus and exponent), in practice, JWKs are often retrieved dynamically from a JWKS (JSON Web Key Set) endpoint. More specifically, a JWKS is a collection of JWKs hosted by an authentication provider, allowing clients to fetch the appropriate key to verify JWTs without storing them manually. This is precisely the role of the `serviceEndpoint` below.
- `serviceEndpoint`: The endpoint where JWKs can be dynamically retrieved from in case Okta is used.

### 1.b) Duo Example of an Agent ID

#### ID

```text
ID: DUO-CLIENT_ID
```

where `ID` represents a universally unique identifier associated to an Agent subject (e.g., a Duo client ID in this case).

#### ResolverMetadata

The `ResolverMetadata` is represented as a JSON-LD object comprising the following elements:

```json
ResolverMetadata
{
  id: "DUO-CLIENT_ID",
  assertionMethod: [{
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://api-(tenantid).duosecurity.com/"
  }]
}
```

where:

- `assertionMethod`: Idem to the case above described for Okta.
- `serviceEndpoint`: The endpoint where JWKs can be dynamically retrieved from in case Duo is used.

## 2) A2A Example

Although an Agent Card in A2A includes authentication requirements for an already deployed instance of an Agent subject, such as basic or bearer AuthN schemes, these are fundamentally focused on API AuthN. More specifically, A2A has not yet addressed the problem of proving the provenance and integrity of an Agent Card. This is relevant given that an Agent Card comprises claims about the Agent's version, its capabilities and skills, and other features, for which it is essential to build trust not only during the discovery phase (i.e., even before attempting to connect to the Agent associated to the Agent Card) but also during the selection and composition of a Multi-Agent System (MAS).

Hence, the A2A model may benefit from the use of verifiable identities and `ResolverMetadata` as detailed below.

### ID

```text
ID: A2A-Agent_ID
```

In the [`Agent2Agent (A2A) model`](https://google.github.io/A2A/#/documentation), the `ID` could be represented by a URL, e.g., hosted at `https://YOUR-DOMAIN/.well-known/agent.json`, which links to a structured metadata file in the form of an [`Agent Card`](https://google.github.io/A2A/specification/agent-card/).

### ResolverMetadata

A `ResolverMetadata` example for an A2A Agent represented as a JSON-LD object:

```json
ResolverMetadata
{
  id: "A2A-Agent_ID",
  assertionMethod: [{
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://api.NODE/ORG"
  }]
}
```

where:

- `assertionMethod`: Idem to the cases above described for Okta and Duo.
- `serviceEndpoint`: The endpoint where JWKs can be dynamically retrieved from. In this case, this could be a **trust anchor**, e.g., an `Identity Node` within the [`AGNTCY`](https://agntcy.org/) identity system.

## 3) MCP Server Examples

The latest MCP specification covers authentication and delegated authorization requirements and recommends the use of OAuth 2.1, which entails the use of IdPs and Auth Providers, such as Okta, Duo, or others. However, MCP has not yet addressed the problem of proving provenance and building trust during dynamic discovery and selection of already deployed MCP Servers. For instance, a calling Agent might want to verify the provenance and resources and/or tools supported by an MCP Server, and build trust even before attempting to connect to it (i.e., building trust even before the connectivity and AuthN process is started).

Hence, the MCP model may benefit from the use of an [`MCP Badge`](../vc/mcp.md) and `ResolverMetadata` in order to automatically discover public keys and verify their origin in a trusted manner. The examples below show `IDs` and `ResolverMetadata` for MCP Servers when Okta or Duo are used as IdPs.
Also note that, the AGNTCY enables organizations to bring their own MCP Server IDs (as in the examples 3.a) and 3.b) below) or create new ones via the AGNTCY identity services. Hence, the MCP Server identity might be a Fully Qualified Domain Name (FQDN), an ID created through Okta, Duo, AD, Entra ID or other identity providers, or a DID.

### 3.a) Okta Example of an MCP Server ID

In order to enable the use of `ResolverMetadata` and generate `MCP Server Badges` that can be automatically resolved and verified when Okta is used as the IdP, the `ID` and `ResolverMetadata` associated to an MCP Server could follow the same approach as in the example 1.a) above.

#### ID

```text
ID: OKTA-APP_ID
```

where `ID` represents a universally unique identifier associated to an MCP Server subject when Okta is used.

#### ResolverMetadata

The `ResolverMetadata` is represented as a JSON-LD object comprising the following elements:

```json
ResolverMetadata
{
  id: "OKTA-APP_ID",
  assertionMethod: [{
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://OKTA_TENANT_NAME.okta.com/"
  }]
}
```

where:

- `assertionMethod`: Idem as in case 1.a).
- `serviceEndpoint`: The endpoint where the JWK associated to the MCP Server can be dynamically retrieved from in case Okta is used.

### 3.b) Duo Example of an MCP Server ID

Likewise, to enable the use of `ResolverMetadata` and `MCP Server Badges` that can be automatically resolved and verified when Duo is used as the IdP, the `ID` and `ResolverMetadata` associated to an MCP Server could follow the same approach as in the example 1.b) above.

#### ID

```text
ID: DUO-CLIENT_ID
```

where `ID` represents a universally unique identifier associated to an MCP Server subject when Duo is used.

#### ResolverMetadata

The `ResolverMetadata` is represented as a JSON-LD object comprising the following elements:

```json
ResolverMetadata
{
  id: "DUO-CLIENT_ID",
  assertionMethod: [{
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://api-(tenantid).duosecurity.com/"
  }]
}
```

where:

- `assertionMethod`: Idem as in case 1.b).
- `serviceEndpoint`: The endpoint where the JWK associated to the MCP Server can be dynamically retrieved from in case Duo is used.

## 4) Decentralized Identifiers (DIDs) Example

### ID

```text
did:agntcy:{ID}
```

where in this case, the `ID` is a `DID`. As indicated in the above `ID`, a `DID` structure is composed of three parts, providing a universally unique identifier that identifies the Agent subject.

### ResolverMetadata

In this case, the `ResolverMetadata` is, according the [`standard`](https://www.w3.org/TR/did-1.1/), a `DID Document`. It is also represented as a JSON-LD object comprising the following elements:

```json
ResolverMetadata
{
  id: "did:agntcy:ID",
  verificationMethod: [{
    controller: "did:jwk:eyJhbGciOiJFUz....",
    publicKeyJwk: {}
  }],
  assertionMethod: [{
    controller: "did:jwk:eyJhbGciOiJFUz....",
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://api.NODE/ORG"
  }]
}
```

where:

- `verificationMethod`: contains the public key that can be used to prove and verify the signatures, including ownership of a credential.
- `assertionMethod`: represents how a DID subject can issue or assert claims about themselves or others. For example, an entity might use assertion methods to sign verifiable credentials, proving that certain information (like an Agent skill) is valid and trustworthy.
- `serviceEndpoint`: The endpoint or `Identity Node` where the `DID Document` is published and accessible from.
