---
sidebar_position: 2
---

# Agntcy - User Flows

## Create a New Agent

```mermaid
sequenceDiagram
autonumber

Agent Creator->>e.g. Github: Publish agent source<br/>code and ACP manifest

Agent Creator->>Identity CLI: Create and publish ResolverMetadata<br/>and empty Agent Passport with well-known URIs

Agent Creator->>Directory CLI: Create Agent OASF with Agent Passport well-known URI in identity extension

Agent Creator->>Directory CLI: Publish OASF

Agent Creator->>Identity CLI: Issue an Agent Badge (Verifiable Credential) with OASF

Agent Creator->>Identity CLI: Publish the Agent Badge and add it to the Agent Passport
```

## Update an Agent

```mermaid
sequenceDiagram
autonumber

Agent Creator->>e.g. Github: Update and publish agent source<br/>code and ACP manifest

Agent Creator->>Directory CLI: Update Agent OASF keeping the same<br/>Agent Passport well-known in identity extension

Agent Creator->>Directory CLI: Publish OASF

Agent Creator->>Identity CLI: Issue a new Agent Badge (Verifiable Credential) with OASF

Agent Creator->>Identity CLI: Publish the Agent Badge and add it to the Agent Passport
```

## Verify an Agent Locally

```mermaid
sequenceDiagram
autonumber

Agent Verifier->>Directory CLI: Discover and download the agent OASF


Agent Verifier->>Agent Verifier: Extract the Agent Passport well-known<br/>URI from the OASF identity extension

Agent Verifier->>Identity CLI: Resolve the Agent Passport well-known URI

Agent Verifier->>Agent Verifier: Find the Agent Badge in the<br/>Agent Passport that matches the OASF

Agent Verifier->>Identity CLI: Verify the Agent Badge
```

## Verify an Agent Using Search Endpoint

```mermaid
sequenceDiagram
autonumber

Agent Verifier->>Directory CLI: Discover and download the agent OASF

Agent Verifier->>Agent Verifier: Extract the Agent Passport well-known<br/>URI from the OASF identity extension

Agent Verifier->>Identity CLI: Search for the Agent Badge related to the<br/>OASF + Agent Passport well-known URI

Agent Verifier->>Identity CLI: Verify the Agent Badge
```
