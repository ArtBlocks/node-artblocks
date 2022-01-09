/* 
There is a discrepancy between the way hashes are passed to projects

Contracts
V1 - { hashes: [hash_1, hash_2], ...}
V2 - { hash: hash_1, ...}

The first version of the contract anticipated the use of an array of multiple token 
hashes for each token id to increase the available entropy for a script to utilize. 
The latest version of the contract issues a single hash per token id.

This may change again with future contract versions
*/
function hash(contract, token_id, token_hash) {
  if (contract == "0x059edd72cd353df5106d2b9cc5ab83a52287ac3a") {
    return `let tokenData = {"hashes":["${token_hash}"], "tokenId":"${token_id}"}`
  } else {
    return `let tokenData = {"hash":"${token_hash}", "tokenId":"${token_id}"}`
  }
}

export default { hash }