---
sidebar_position: 2
---

# DID

## Introduction

Decentralized identifiers (`DIDs`) are a new type of identifier that enables verifiable, decentralized digital identity. A `DID` refers to any subject (e.g., an agent, a locator, an organization, etc.) as determined by the issuer of the `DID`.
`DIDs` are URIs that associate a `DID` subject with a [`DID Document`](/docs/id/id-document) allowing trustable interactions associated with that subject.

## Scope

This document describes the structure of a `DID` (Decentralized Identifier).
Multiple `DID` methods are defined in the `Identity` platform, each with its own syntax and resolution process. The `AGNTCY` `DID` method is one of them.

## `AGNTCY` `DID` method

The `DID` structure is composed of three parts:

```
did:agntcy:{ID}
```

`ID` is a random UUID (Universally Unique Identifier) that identifies the `DID` subject.

## Other `DID` methods

We will define other `DID` methods in the future, each with its own syntax and resolution process. The `AGNTCY` `DID` method is just one of them.
