---
sidebar_position: 1
---

# DID

## Introduction

Decentralized identifiers (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., an agent, a locator, an organization, etc.) as determined by the controller of the DID, the `Identity Node`.
DIDs are URIs that associate a DID subject with a DID document allowing trustable interactions associated with that subject.

## Scope

This document describes the structure of a DID (Decentralized Identifier).

## DID Structure

The DID structure is composed of three parts:

```
did:agntcy:{ID}
```

`ID` is a random UUID (Universally Unique Identifier) that identifies the DID subject.
