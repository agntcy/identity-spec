# Agent Badge Examples

## OASF Agent Badge

The example below shows an [`Agent Badge`](./intro.md) as a `VC`, represented as a JSON-LD object that contains information about the Agent, including the issuing organization, its [`ID`](/docs/id/definitions), a schema definition, which in this case is an [`OASF Definition`](https://docs.agntcy.org/pages/oasf.html). Such definition may encompass additional metadata, including locators, authentication methods, hashing methods, etc. The `VC` below also includes a data integrity proof as an embedded proof within an envelope.<br /><br />

```
CREDENTIAL
{
  @context: ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/examples/v2"],
  id: uuid(),
  type: ["VerifiableCredential", "AgentBadge"],
  issuer: ORG,
  validFrom: date(),
  credentialSubject: {
    id: "ID",
    badge: OASF_JSON,
  },
  credentialSchema: [{
    id: "https://schema.oasf.agntcy.org/schema/objects/agent",
    type: "JsonSchema"
  }],
  proof: {
    type: "DataIntegrityProof",
    proofPurpose: "assertionMethod",
    proofValue: "z58DAdFfa9SkqZMVPxAQp...jQCrfFPP2oumHKtz"
  }
}

```

where:

- `credentialSubject.id`: represents the [`ID`](/docs/id/definitions) of the Agent subject.
- `credentialSubject.badge`: adheres to the [`OASF Definition`](https://docs.agntcy.org/pages/oasf.html) schema.

## A2A Agent Badge

Similarly, the example below shows a second `Agent Badge`, using in this case another definition, that is, an [`A2A Agent Card`](https://github.com/google/A2A/blob/main/specification/json/a2a.json#AgentCard) schema.<br /><br />

```
CREDENTIAL
{
  @context: ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/examples/v2"],
  id: uuid(),
  type: ["VerifiableCredential", "AgentBadge"],
  issuer: ORG,
  validFrom: date(),
  credentialSubject: {
    id: "ID",
    badge: AGENT_CARD_JSON,
  },
  credentialSchema: [{
    id: "https://github.com/google/A2A/blob/main/specification/json/a2a.json#AgentCard",
    type: "JsonSchema"
  }],
  proof: {
    type: "DataIntegrityProof",
    proofPurpose: "assertionMethod",
    proofValue: "y58DA4DS42D35455A32Qp...jQCrfFPP2oumHKtz"
  }
}

```

where:

- `credentialSubject.id`: represents the [`ID`](/docs/id/definitions) of the Agent subject.
- `credentialSubject.badge`: adheres to the [`A2A Agent Card`](https://github.com/google/A2A/blob/main/specification/json/a2a.json#AgentCard) schema.

<br />

:::tip[IMPORTANT]
The `proof` in an `Agent Badge` can be verified using the `assertionMethod` defined in the `ResolverMetadata` object (various `ResolverMetadata` examples are available [`here`](../id/examples.md)).
:::

<br />

:::tip[IMPORTANT]
Multiple envelopes are supported in the [`AGNTCY`](https://agntcy.org/), including JSON Object Signing and Encryption (`JOSE`).
:::

## Agent Badges accessible through a "well-known" endpoint

The `Agent Badges` of an Agent subject can be accessed using the following well-known URL:

```
https://api.NODE/ID/.well-known/vcs.json
```

where:

- `ID`: represents the [`ID`](/docs/id/definitions) of the Agent subject.
- `NODE`: represents a **trust anchor**, e.g., an `Identity Node` within the [`AGNTCY`](https://agntcy.org/) identity system.

:::tip[IMPORTANT]
Note that under the well-known URL above, there could be several agents badges available from the same issuer.
:::
