---
sidebar_position: 3
---

# DID Document

## Introduction

A `DID Document` is a JSON-LD document that contains information about a `DID` subject. It is a machine-readable representation of the `DID` subject's identity.
A [`DID`](/docs/did) resolves to a `DID Document`.

## DID Document Structure

Agnecy `DID Document` is composed of the following parts:

```
DOCUMENT
{
  id: "did:agntcy:ID",
  alsoKnownAs: "ID",
  verificationMethod: [{
    controller: "did:web:NODE:ORG",
    publicKeyJwk: {}
  }],
  assertionMethod: [{
    controller: "did:web:NODE:ORG ",
    publicKeyJwk: {}
  }],
  service: [{
    serviceEndpoint: 	"https://api.NODE/ORG "
  }]
}
```

where:

- `did:web`: Web DID resolver to `well-known` endpoint `api.NODE/ORG/well-known/did.json`
- `ID`: [`DID`](/docs/did)
- `verificationMethod`: Public key used to verify signatures
- `assertionMethod`: Public key used to sign verifiable credentials
- `ORG`: Organization
- `NODE`: `Identity Node`
