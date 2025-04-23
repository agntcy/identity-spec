# Agent Passport

`Agent Passport` is an enveloped `Verifiable Credential` that represents an Agent in the `Identity` ecosystem.
It is a JSON-LD document that contains information about the Agent, such as its [`ID`](/docs/id/intro), its definition (Ex.: [`OASF Definition`](https://schema.oasf.agntcy.org/objects/agent) or [`A2A Agent Card`](https://github.com/google/A2A/blob/main/specification/json/a2a.json)) and other metadata used for defining locators, authentication, MFA, etc.

Here is an example of an `AGNTCY` `Agent Passport` with an embedded proof:

```
CREDENTIAL
{
  @context: ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/examples/v2"],
  id: uuid(),
  type: ["VerifiableCredential", "OASF"],
  issuer: ORG,
  validFrom: date(),
  credentialSubject: {
    id: "ID",
    oasf: OASF_JSON,
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

- `credentialSubject.id`: [`ID`](/docs/id/intro) of the subject
- `credentialSubject.oasf`: [`OASF Definition`](https://schema.oasf.agntcy.org/objects/agent)

:::note
The `proof` is verified by the `assertionMethod` entry in the ID Document.
:::

:::note
Multiple envelopes are supported such as `JOSE`(JSON Object Signing and Encryption).
:::
