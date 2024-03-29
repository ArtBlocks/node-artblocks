/* 
There is a discrepancy between the way hashes are passed to projects

Contracts
V0 - { hashes: [hash_1, hash_2], ...}
V1 - { hash: hash_1, ...}

The first version of the contract anticipated the use of an array of multiple token 
hashes for each token id to increase the available entropy for a script to utilize. 
The latest version of the contract issues a single hash per token id.

This may change again with future contract versions
*/
function token_data(contract, hash, token_id, flex=false, preferred_ipfs_gateway=null, preferred_arweave_gateway=null, external_asset_dependencies=null) {
  if (flex) {
    return {
      hash: hash,
      tokenId: token_id,
      preferredIPFSGateway: preferred_ipfs_gateway === null ? "https://ipfs.io/ipfs/" : preferred_ipfs_gateway,
      preferredArweaveGateway: preferred_arweave_gateway=== null ? "https://arweave.net/" : preferred_arweave_gateway,
      externalAssetDependencies: external_asset_dependencies
    }
  }
  else if (contract == "0x059edd72cd353df5106d2b9cc5ab83a52287ac3a") {
    return {
      hashes: [hash],
      tokenId: token_id
    }
  }
  else {
    return {
      hash: hash,
      tokenId: token_id
    }
  }
}

export default { token_data }
