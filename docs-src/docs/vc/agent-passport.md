# Agent Passport

`Agent Passport` is an enveloped `Verifiable Credential` that represents an Agent in the `Identity` ecosystem.

It is a JSON-LD document that aggregates all [`Agent Badges`](/docs/vc/agent-badge) and/or other metadata used for defining locators, authentication, MFA, etc.

### `Agent Passport` as a `well-known` endpoint

The `Agent Passport` of an agent can be accessed using the following `well-known` URL:

```
https://api.NODE/ID/.well-known/passport.json
```

where:

- `ID`: The Agent `ID`
- `NODE`: The `Identity Node`

### `Agent Passport` as a `Verifiable Credential`

Here is an example of an `AGNTCY` `Agent Passport`, as a `Verifiable Credential`, with `Agent Badges` and embedded proof envelopes:

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

where:

- `verifiableCredential`: Array of `Verifiable Credentials` that represent the `Agent Badges`.

:::note
All `proofs` are verified by the `assertionMethod` entry in the ID Document.
:::

:::note
Multiple envelopes are supported such as `JOSE`(JSON Object Signing and Encryption).
:::
