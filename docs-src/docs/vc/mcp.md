# MCP Server Badge Example

## MCP Server Badge

The example below shows an [`MCP Server Badge`](./intro.md) as a `VC`, represented as a JSON-LD object that contains information about the MCP Server, including the issuing organization, its [`ID`](/docs/id/definitions), and schema definition (e.g. an [`MCP Server Definition`](https://spec.identity.agntcy.org/jsonschema/agntcy/identity/core/v1alpha1/MCP#source-) in JSON). Such definition may encompass additional metadata, including locators, authentication methods, hashing methods, etc. The `VC` below also includes a data integrity proof as an embedded proof within an envelope.<br /><br />

```json
CREDENTIAL
{
  @context: ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/examples/v2"],
  id: uuid(),
  type: ["VerifiableCredential", "MCPServerBadge"],
  issuer: ORG,
  validFrom: date(),
  credentialSubject: {
    id: "ID",
    badge: MCP_SERVER_JSON,
  },
  credentialSchema: [{
    id: "https://spec.identity.agntcy.org/jsonschema/agntcy/identity/core/v1alpha1/MCP#source-",
    type: "JsonSchema"
  }],
  proof: {
    type: "DataIntegrityProof",
    proofPurpose: "assertionMethod",
    proofValue: "x36BAcFde8KkqYABCyBCq...jQCrfFPP2oumHKtz"
  }
}

```

where:

- `credentialSubject.id`: represents the [`ID`](/docs/id/definitions) of the MCP Server subject.
- `credentialSubject.badge`: adheres to the [`MCP Server Definition`](https://spec.identity.agntcy.org/jsonschema/agntcy/identity/core/v1alpha1/McpServer#source-) schema.

<br />

:::tip[IMPORTANT]
The `proof` in an `MCP Server Badge` can be verified using the `assertionMethod` defined in the `ResolverMetadata` object (various `ResolverMetadata` examples are available [`here`](../id/examples.md)).
:::

<br />

:::tip[IMPORTANT]
Multiple envelopes are supported in the [`AGNTCY`](https://agntcy.org/), including JSON Object Signing and Encryption (`JOSE`).
:::

## MCP Server Badges accessible through a "well-known" endpoint

The `MCP Server Badges` can be accessed using the following well-known URL:

```text
https://api.NODE/ID/.well-known/vcs.json
```

where:

- `ID`: represents the [`ID`](/docs/id/definitions) of the MCP Server subject.
- `NODE`: represents a **trust anchor**, e.g., an `Identity Node` within the [`AGNTCY`](https://agntcy.org/) identity system.

:::tip[IMPORTANT]
Note that under the well-known URL above, there could be several MCP Server badges available from the same issuer.
:::
