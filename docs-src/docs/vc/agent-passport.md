# Agent Passport

`Agent Passport` is a envelopped OASF verifiable credential that represents an Agent in the Agntcy ecosystem.
It is a JSON-LD document that contains information about the Agent, such as its DID, OASF definition, and other metadata.

Here is an example of an `Agent Passport` with a `JOSE` envelope:

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

- `credentialSubject.id`: DID of the subject
- `credentialSubject.oasf`: OASF Definition

Note: The `proof` is verfiied by the `assertionMethod` public key in the DID Document.
