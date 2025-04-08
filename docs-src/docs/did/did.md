---
sidebar_position: 2
---

# DID

## Introduction

Decentralized identifiers (`DIDs`) are a new type of identifier that enables verifiable, decentralized digital identity. A `DID` refers to any subject (e.g., an agent, a locator, an organization, etc.) as determined by the issuer of the `DID`.
`DIDs` are URIs that associate a `DID` subject with a [`DID Document`](/docs/did/did-document) allowing trustable interactions associated with that subject.

## Scope

This document describes the structure of a `DID` (Decentralized Identifier).

## DID Structure

The `DID` structure is composed of three parts:

```
did:agntcy:{ID}
```

`ID` is a random UUID (Universally Unique Identifier) that identifies the `DID` subject.
