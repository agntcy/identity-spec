# Agent Passport

`Agent Passport` is a envelopped OASF `Verifiable Credential` represents an Agent in the `Identity` ecosystem.
It is a JSON-LD document that contains information about the Agent, such as its [`DID`](/docs/did), its definition (Ex.: [`OASF Definition`](https://schema.oasf.agntcy.org/objects/agent)), and other metadata used for defining locators, authentication, MFA, etc.

Here is an example of an `AGNTCY` `Agent Passport` with a `JOSE`(JSON Object Signing and Encryption) envelope:

```
CREDENTIAL
{
  @context: ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/examples/v2"],
  id: uuid(),
  type: ["VerifiableCredential", "OASF"],
  issuer: ORG,
  validFrom: date(),
  credentialSubject: {
    id: "did:agntcy:ID",
    oasf: OASF_JSON,
  },
  credentialSchema: [{
    id: "https://oasf.agtncy.org,
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

- `credentialSubject.id`: [`DID`](/docs/did) of the subject
- `credentialSubject.oasf`: [`OASF Definition`](https://schema.oasf.agntcy.org/objects/agent)

Note: The `proof` is verfiied by the `assertionMethod` public key in the DID Document.
