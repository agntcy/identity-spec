---
sidebar_position: 1
---

# Identity Flows

## Initial Identity Setup

<div style={{width: '70%'}}>

```mermaid
sequenceDiagram
autonumber

% Connect to wallet
Agent Creator->>Identity CLI: Connect to wallet
activate Identity CLI
Identity CLI->>Wallet: Connect
Wallet-->>Identity CLI: Connected
Identity CLI-->>Agent Creator: Connected
deactivate Identity CLI

% Create public and private keys
Agent Creator->>Identity CLI: Create and store public and private keys
activate Identity CLI
Identity CLI->>Identity CLI: Create public and private keys
Identity CLI->>Wallet: Store keys
Wallet-->>Identity CLI: Stored
Identity CLI-->>Agent Creator: Keys created and stored
deactivate Identity CLI

% Connect to Identity Node
Agent Creator->>Identity CLI: Connect to Identity Node
activate Identity CLI
Identity CLI->>Identity Node: Connect to Identity Node
Identity Node-->>Identity CLI: Connected
Identity CLI->>Agent Creator: Connected
deactivate Identity CLI

% Publish public key as well known
Agent Creator->>Identity CLI: Publish public key as well known
activate Identity CLI
Identity CLI->>Wallet: Get public key
Wallet-->>Identity CLI: Public key
Identity CLI->>Identity Node: Publish public key as well known
Identity Node-->>Identity CLI: Published
Identity CLI-->>Agent Creator: Published
deactivate Identity CLI
```

</div>