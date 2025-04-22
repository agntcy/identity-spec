---
sidebar_position: 2
---

# Decentralized Identifiers (DIDs)

## Introduction

This document provides an example of `DID` and `DID Document` structures, following the [`Decentralized Identifiers (DIDs) v1.1`](https://www.w3.org/TR/did-1.1/) specification.

Decentralized identifiers (`DIDs`) are a new type of identifier that enables verifiable, decentralized digital identity. A `DID` refers to any subject (e.g., an agent, a locator, an organization, etc.) as determined by the issuer of the `DID`.
`DIDs` are URIs that associate a `DID` subject with a `DID Document` allowing trustable interactions associated with that subject.

A `DID Document` is a JSON-LD document that contains information about a `DID` subject. It is a machine-readable representation of the `DID` subject's identity.
A `DID` resolves to a `DID Document`.

### `DID`

The `DID` structure is composed of three parts:

```
did:agntcy:{ID}
```

`ID` is a random UUID (Universally Unique Identifier) that identifies the `DID` subject.

### DID Document

The `DID Document` is composed of the following parts:

```
DOCUMENT
{
  id: "did:agntcy:ID",
  node: "NODE",
  verificationMethod: [{
    controller: "did:jwk:eyJhbGciOiJFUz....",
    publicKeyJwk: {}
  }]
}
```

where:

- `id`: Identifier
- `NODE`: `Identity Node` where the `DID Document` was published
- `verificationMethod`: Contains the public key used to verify signatures
- `did:jwk`: DID resolver to `well-known jwks.json` JWK content
