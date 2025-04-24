# Agent Badge Example

The example below shows an [`Agent Badge`](./intro.md) as a `VC`, represented as a JSON-LD object that contains information about the Agent, including the issuing organization, its [`ID`](/docs/id/intro), a schema definition (e.g., an [`OASF Definition`](https://schema.oasf.agntcy.org/objects/agent) in this case, or it could be another definition such as an [`A2A Agent Card`](https://github.com/google/A2A/blob/main/specification/json/a2a.json#AgentCard) schema). Such definition may encompass additional metadata, including locators, authentication methods, hashing methods, etc. The `VC` below also includes a data integrity proof as an embedded prove envelope.<br /><br />

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

- `credentialSubject.id`: represents the [`ID`](/docs/id/intro) of the Agent subject.
- `credentialSubject.badge`: adheres to the [`OASF Definition`](https://schema.oasf.agntcy.org/objects/agent) schema.

<br />

:::tip[IMPORTANT]
The `proof` in an Agent Badge is verified by the `assertionMethod` defined in the `ResolverMetadata` (various `ResolverMetadata` examples are available [`here`](../id/did.md)).
:::

<br />

:::tip[IMPORTANT]
Multiple envelopes are supported in the [`AGNTCY`](https://agntcy.org/), including JSON Object Signing and Encryption (`JOSE`).
:::
