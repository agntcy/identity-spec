# Agent Passport Example

## Agent Passport accessible through a "well-known" endpoint

The Agent Passport of an Agent subject can be accessed using the following well-known URL:

```
https://api.NODE/ID/.well-known/ap.json
```

where:

- `ID`: represents the [`ID`](/docs/id/intro) of the Agent subject.
- `NODE`: represents a **trust anchor**, e.g., an `Identity Node` within the [`AGNTCY`](https://agntcy.org/) identity system.

## Agent Passport as a Verifiable Credential

The example below shows an [`Agent Passport`](./intro.md) as a `VC`, also represented as a JSON-LD object that contains information about the Agent, including the issuing organization, its [`ID`](/docs/id/intro), a schema definition (e.g., an [`OASF Definition`](https://schema.oasf.agntcy.org/objects/agent) in this case, or it could be another definition such as an [`A2A Agent Card`](https://github.com/google/A2A/blob/main/specification/json/a2a.json#AgentCard) schema). Such definition may encompass additional metadata, including locators, authentication methods, hashing methods, etc. The `VC` below also includes a data integrity proof as an embedded prove envelope. It is a JSON-LD document that aggregates all [`Agent Badges`](/docs/vc/agent-badge) and/or other metadata used for defining locators, authentication, MFA, etc. <br />

```
CREDENTIAL
{
  @context: ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/examples/v2"],
  type: ["VerifiablePresentation", "AgentPassport"],
  verifiableCredential: [{
    # A VC containing the OASF Definition
    id: uuid(),
    issuer: ORG,
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
  },
  {
    # Another VC containing the Agent Card Definition
    id: uuid(),
    issuer: ORG,
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
  }],
  proof: {
    type: "DataIntegrityProof",
    proofPurpose: "assertionMethod",
    proofValue: "ac34sds34DSDS2dss1dsdQp...jQCrfFPP2oumHKtz"
  }
}

```

<!---

```
PRESENTATION
{
  @context: ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/examples/v2"],
  type: ["VerifiablePresentation", "AgentPassport"],
  verifiableCredential: [{
    # A VC containing the OASF Definition
    id: uuid(),
    issuer: ORG,
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
  },
  {
    # Another VC containing the Agent Card Definition
    id: uuid(),
    issuer: ORG,
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
  }],
  proof: {
    type: "DataIntegrityProof",
    proofPurpose: "assertionMethod",
    proofValue: "ac34sds34DSDS2dss1dsdQp...jQCrfFPP2oumHKtz"
  }
}

```

-->

where:

- `verifiableCredential`: Array of `Verifiable Credentials` that represent the `Agent Badges`.

<br />

:::tip[IMPORTANT]
Like in the case of Agent Badges, the `proof` in an Agent Passport is verified by the `assertionMethod` defined in the `ResolverMetadata` (various `ResolverMetadata` examples are available [`here`](../id/did.md)).
:::

<br />

:::tip[IMPORTANT]
Likewise, multiple envelopes are supported for Agent Passports, including JSON Object Signing and Encryption (`JOSE`).
:::
