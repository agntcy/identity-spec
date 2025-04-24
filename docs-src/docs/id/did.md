---
sidebar_position: 2
---

# Examples

## 1) IdP Examples (Okta and Duo)

### 1.a) Okta Example

### ID

```
ID: OKTA-APP_ID
```

where `ID` represents a universally unique identifier associated to an Agent subject (e.g., an Okta application ID in this case).

### ResolverMetadata

The `ResolverMetadata` is represented as a JSON-LD object comprising the following elements:

```
ResolverMetadata
{
  id: "OKTA-APP_ID",
  assertionMethod: [{
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://OKTA_TENANT_NAME.okta.com"
  }]
} 
```

where:

- `assertionMethod`: contains the method, e.g., a JSON Web key (JWK), and in some cases, may also contain the public key that can be used to verify the [`Verifiable Credentials`](/docs/vc/intro). JWKs are commonly used for signing and verifying JWTs (JSON Web Tokens). Note that while a JWK may contain the public key itself, in practice, JWKs are often retrieved dynamically from a JWKS (JSON Web Key Set) endpoint. More specifically, a JWKS is a collection of JWKs hosted by an authentication provider, allowing clients to fetch the appropriate key to verify JWTs without storing them manually. This is precisely the role of the `serviceEndpoint` below. 
- `serviceEndpoint`: the identity node where the Okta signing object can be found.

### 1.b) Duo Example

### ID

```
ID: DUO-CLIENT_ID
```

where `ID` represents a universally unique identifier associated to an Agent subject (e.g., a Duo client ID in this case).

### ResolverMetadata

The `ResolverMetadata` is represented as a JSON-LD object comprising the following elements:

```
ResolverMetadata
{
  id: "DUO-CLIENT_ID",
  assertionMethod: [{
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: "https://api-XXXXXXXX.duosecurity.com"
  }]
}
```

where:

- `assertionMethod`: Idem to the case above described for Okta.
- `serviceEndpoint`: The endpoint where JWKs can be dynamically retrieved from in case Duo is used.

## 2) A2A Example

### ID

```
ID: A2A-Agent_ID
```

In the [`Agent2Agent (A2A) model`](https://google.github.io/A2A/#/documentation), the `ID` could be represented by a structured metadata file, typically hosted at https://YOUR-DOMAIN/.well-known/agent.json, which links to an Agent Card.

### ResolverMetadata

Although an Agent Card in A2A includes authentication requirements for an already deployed instance of an Agent subject, such as basic or bearer AuthN schemes, these are fundamentally focused on API AuthN. More specifically, A2A has not yet addressed the problem of proving the ownership and integrity of an Agent Card. This is relevant given that an Agent Card comprises claims about the Agent's version, its capabilities and skills, and other features, for which it is essential to build trustworthiness during the selection and composition of Multi-Agent Systems (MAS).

Hence, the A2A model may benefit from the use of the `ResolverMetadata` example detailed below, which is represented as a JSON-LD object:

```
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

## 3) Decentralized Identifiers (DIDs) Example

### ID

```
did:agntcy:{ID}
```

where in this case, the `ID` is a `DID`. As indicated above, a `DID` structure is composed of three parts, providing a universally unique identifier that identifies the Agent subject.

### ResolverMetadata

In this case, the `ResolverMetadata` is, according the [`standard`](https://www.w3.org/TR/did-1.1/), a `DID Document`. It is also represented as a JSON-LD object comprising the following elements:

```
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
- `assertionMethod`: represents how a DID subject can issue or assert claims about themselves or others. For example, an entity might use assertion methods to sign verifiable credentials, proving that certain information (like an Agent skill) is valid and trustworthy. Essentially, verification methods focus on proving identity, while assertion methods focus on issuing trusted claims.
- `serviceEndpoint`: The endpoint or `Identity Node` where the `DID Document` is published and accessible.