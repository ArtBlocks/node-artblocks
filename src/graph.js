import fetch from 'node-fetch'

// Most recent deployments of ArtBlocks on the graph
const SUBGRAPH_MAINNET="https://api.thegraph.com/subgraphs/name/artblocks/art-blocks";
const SUBGRAPH_ROPSTEN="https://api.thegraph.com/subgraphs/name/artblocks/art-blocks-artist-staging";

function get_subgraph_api(network) {
  switch (network) {
    case "mainnet":
      return SUBGRAPH_MAINNET
    case "ropsten":
      return SUBGRAPH_ROPSTEN
    default:
      throw new Error("Supported networks include 'mainnet' and 'ropsten'.")
  }
}

async function artblocks_subgraph(query, network="mainnet") {
  
  // Check network
  const url = get_subgraph_api(network)

  // Request variable query from the graph deployment
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })

  // Await response and return
  const result = await response.json()
  if (result.errors) {
    throw new Error(result.errors[0].message)
  } else {
    return result.data
  }
}

export default { artblocks_subgraph }