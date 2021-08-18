// TODO
// There is a discrepancy between the way hashes are passed to projects
// Could make this a bit cleaner
//
// Contracts
// V1 - { hashes: [hash_1, hash_2], ...}
// V2 - { hash: hash_1, ...}
//
// This may change again with future contract versions
function hash(project_id, token_id, token_hash) {
  if (project_id < 3) {
    return `let tokenData = {"hashes":["${token_hash}"], "tokenId":"${token_id}"}`
  } else {
    return `let tokenData = {"hash":"${token_hash}", "tokenId":"${token_id}"}`
  }
}

export default { hash }