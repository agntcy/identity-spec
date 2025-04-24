---
sidebar_position: 3
---

# Agntcy - Detailed Flows

## Create a New Agent

```mermaid
sequenceDiagram
autonumber

Agent Creator->>e.g. Github: Publish agent source<br/>code and ACP manifest
activate e.g. Github
e.g. Github-->>Agent Creator: Published
deactivate e.g. Github

Agent Creator->>Identity CLI: Create and publish ResolverMetadata with an Agent ID
activate Identity CLI
Identity CLI->>Wallet: Get Public Key
activate Wallet
Wallet-->>Identity CLI: Public Key
deactivate Wallet
Identity CLI->>Identity Node: Create and publish ResolverMetadata with an Agent ID
activate Identity Node
Identity Node->>Identity Node: Generate a globally unique ID
Identity Node->>Identity Node: Create ResolverMetadata with Agent ID
Identity Node-->>Identity CLI: Created and published
deactivate Identity Node
Identity CLI-->>Agent Creator: Created and published
deactivate Identity CLI

Agent Creator->>Directory CLI: Create Agent OASF with Agent ID in identity extension
activate Directory CLI
Directory CLI-->>Agent Creator: OASF
deactivate Directory CLI

Agent Creator->>Directory CLI: Publish OASF
activate Directory CLI
Directory CLI->>Directory: Publish OASF
activate Directory
Directory-->>Directory CLI: Published OASF with<br/>Catalogue ID (Digest)
deactivate Directory
Directory CLI-->>Agent Creator: Published OASF with Catalogue ID (Digest)
deactivate Directory CLI

Agent Creator->>Identity CLI: Issue and Publish an Agent Badge<br/>(Verifiable Credential) with OASF
activate Identity CLI
Identity CLI->>Identity CLI: Issue an Agent Badge (Verifiable Credential) with OASF
Identity CLI->>Wallet: Get Private Key
activate Wallet
Wallet-->>Identity CLI: Private Key
deactivate Wallet
Identity CLI->>Identity CLI: Generate Data Integrity proof and add to Agent Badge
Identity CLI->>Identity Node: Publish the Agent Badge<br/>(/v1alpha1/vc/publish)
activate Identity Node
Identity Node-->>Identity CLI: Published
deactivate Identity Node
Identity CLI-->>Agent Creator: Issued and Published
deactivate Identity CLI

```

## Update an Agent

```mermaid
sequenceDiagram
autonumber

Agent Creator->>e.g. Github: Update and publish agent source<br/>code and ACP manifest
activate e.g. Github
e.g. Github-->>Agent Creator: Published
deactivate e.g. Github

Agent Creator->>Directory CLI: Update Agent OASF keeping the same<br/>Agent ID in identity extension
activate Directory CLI
Directory CLI-->>Agent Creator: OASF
deactivate Directory CLI

Agent Creator->>Directory CLI: Publish OASF
activate Directory CLI
Directory CLI->>Directory: Publish OASF
activate Directory
Directory-->>Directory CLI: Published OASF with<br/>Catalogue ID (Digest)
deactivate Directory
Directory CLI-->>Agent Creator: Published OASF with Catalogue ID (Digest)
deactivate Directory CLI

Agent Creator->>Identity CLI: Issue and Publish a new Agent Badge (Verifiable Credential) with OASF
activate Identity CLI
Identity CLI->>Identity CLI: Issue a new Agent Badge (Verifiable Credential) with OASF
Identity CLI->>Wallet: Get Private Key
activate Wallet
Wallet-->>Identity CLI: Private Key
deactivate Wallet
Identity CLI->>Identity CLI: Generate Data Integrity proof
Identity CLI->>Identity Node: Publish the Agent Badge<br/>(/v1alpha1/vc/publish)
activate Identity Node
Identity Node-->>Identity CLI: Published
deactivate Identity Node
Identity CLI-->>Agent Creator: Issued and Published
deactivate Identity CLI
```

## Verify an Agent Locally

```mermaid
sequenceDiagram
autonumber

Agent Verifier->>Directory CLI: Discover and download the agent OASF
activate Directory CLI
Directory CLI->>Directory: Discover and download the agent OASF
activate Directory
Directory-->>Directory CLI: Downloaded OASF
deactivate Directory
Directory CLI->>Agent Verifier: Downloaded OASF
deactivate Directory CLI

Agent Verifier->>Agent Verifier: Extract the Agent ID from<br/>the OASF identity extension

Agent Verifier->>Identity CLI: Resolve the Agent ID to get the Agent Badges
activate Identity CLI
Identity CLI->>Identity Node: Resolve the Agent ID to get the Agent Badges
activate Identity Node
Identity Node-->>Identity CLI: Agent Badges
deactivate Identity Node
Identity CLI-->>Agent Verifier: Agent Badges
deactivate Identity CLI

Agent Verifier->>Agent Verifier: Find the Agent Badge<br/>that matches the OASF

Agent Verifier->>Identity CLI: Verify the Agent Badge
activate Identity CLI
Identity CLI->>Identity Node: Resolve the Agent ID to get the ResolverMetadata
activate Identity Node
Identity Node-->>Identity CLI: ResolverMetadata
deactivate Identity Node
Identity CLI->>Identity CLI: Verify the Agent Badge Data Integrity proof<br/>using the ResolverMetadata public key
Identity CLI-->>Agent Verifier: Verified
deactivate Identity CLI
```

## Verify an Agent Using Search Endpoint

```mermaid
sequenceDiagram
autonumber

Agent Verifier->>Directory CLI: Discover and download the agent OASF
activate Directory CLI
Directory CLI->>Directory: Discover and download the agent OASF
activate Directory
Directory-->>Directory CLI: Downloaded OASF
deactivate Directory
Directory CLI->>Agent Verifier: Downloaded OASF
deactivate Directory CLI

Agent Verifier->>Agent Verifier: Extract the Agent ID from<br/>the OASF identity extension

Agent Verifier->>Identity CLI: Search for the Agent Badge<br/>for the Agent ID + OASF
activate Identity CLI
Identity CLI->>Identity Node: Search for the Agent Badge<br/>for the Agent ID + OASF<br/>(/v1alpha1/vc/search)
activate Identity Node
Identity Node-->>Identity CLI: Agent Badge
deactivate Identity Node
Identity CLI-->>Agent Verifier: Agent Badge
deactivate Identity CLI

Agent Verifier->>Identity CLI: Verify the Agent Badge
activate Identity CLI
Identity CLI->>Identity Node: Resolve the Agent ID to get the ResolverMetadata
activate Identity Node
Identity Node-->>Identity CLI: ResolverMetadata
deactivate Identity Node
Identity CLI->>Identity CLI: Verify the Agent Badge Data Integrity proof<br/>using the ResolverMetadata public key
Identity CLI-->>Agent Verifier: Verified
deactivate Identity CLI
```
