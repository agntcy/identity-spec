# Post-Quantum Safe

As quantum computing technology advances, traditional cryptographic algorithms (such as RSA and ECC) become vulnerable to attacks from quantum computers. To address this challenge, **Post-Quantum Cryptography (PQC)** aims to develop algorithms that remain secure even in the presence of large-scale quantum computers.

This project supports a selection of **NIST-approved** post-quantum algorithms that are available as optional key types in our cryptographic interface.

We align with the algorithm families and naming conventions from the [NIST Post-Quantum Cryptography Project](https://csrc.nist.gov/projects/post-quantum-cryptography).

---
## Supported algorithms

### [`CRYSTALS-Dilithium`](https://pq-crystals.org/dilithium/)
- **Standardized Name**: ML-DSA (Module Lattice–based Digital Signature Algorithm)
- **NIST Standard**: [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)
- **KTY**: `"AKP"`  
- **ALG**: `"ML-DSA-44"` / `"ML-DSA-65"` / `"ML-DSA-87"`  

#### 🔧 Implementations:
- [liboqs](https://github.com/open-quantum-safe/liboqs/tree/main/src/sig/ml_dsa/pqcrystals-dilithium-standard_ml-dsa-44_ref)
- [PQClean](https://github.com/PQClean/PQClean/tree/master/crypto_sign/ml-dsa-44)
- [CRYSTALS-Dilithium Official Site](https://pq-crystals.org/dilithium/)

---

## 🔒 JWK Integration

Post-Quantum algorithms can be represented using **JSON Web Key (JWK)** format, with extensions to support new key types:

```json
{
    "kid": "T4xl70S7MT6Zeq6r9V9fPJGVn76wfnXJ21-gyo0Gu6o",
    "kty": "AKP",
    "alg": "ML-DSA-44",
    "pub": "base64url-encoded-public-key",
    "seed": "base64url-encoded-32-byte-seed",
    "priv": "base64url-encoded-private-key"
}
```