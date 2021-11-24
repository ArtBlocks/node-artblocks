// TODO
// There is a discrepancy between the way hashes are passed to projects
// Could make this a bit cleaner
//
// Contracts
// V1 - { hashes: [hash_1, hash_2], ...}
// V2 - { hash: hash_1, ...}
//
// This may change again with future contract versions
function hash(contract, token_id, token_hash) {
  if (contract == "0x059edd72cd353df5106d2b9cc5ab83a52287ac3a") {
    return `let tokenData = {"hashes":["${token_hash}"], "tokenId":"${token_id}"}`
  } else {
    return `let tokenData = {"hash":"${token_hash}", "tokenId":"${token_id}"}`
  }
}

export default { hash }