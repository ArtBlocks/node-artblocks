import query from './query.js'
import address from './address.js'

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

class ArtBlocks {
  
  constructor(api="thegraph", 
              network="mainnet",
              contracts=[], 
              subgraph_custom="") {

    // TODO
    // Standardized interface for Infura and other data providers
    // Both Infura and The Graph will eventually require user authentification
    if (api != "thegraph") {
      throw new Error("Supported APIs include 'thegraph'.")
    }

    // ArtBlocks (mainnet/ropsten) or custom subgraph endpoint
    if (subgraph_custom != "") {
      this.subgraph = subgraph_custom
    } else {
      if (!["mainnet", "ropsten"].includes(network)) {
        throw new Error("Supported networks include 'mainnet' and 'ropsten'.")
      }
      this.subgraph = get_subgraph_api(network)
    }
    
    // Default contracts
    if (contracts.length == 0) {
      if (network == "mainnet") {
        contracts = [address.artblocks.mainnet.v1, address.artblocks.mainnet.v2]
      } else {
        throw new Error("Must provide contracts for Ropsten projects.")
      }
    }

    this.api = api
    this.network = network
    this.contracts = contracts
  }

  // Query all available projects
  projects() {
    return query.projects(this.subgraph, this.contracts)
  }
  
  // Query project metadata
  project_metadata(id) {
    return query.project_metadata(id, this.subgraph, this.contracts)
  }

  // Query project raw script
  project_script(id) {
    return query.project_script(id, this.subgraph, this.contracts)
  }

  // Query token metadata
  token_metadata(id) {
    return query.token_metadata(id, this.subgraph, this.contracts)
  }

  // Query token raw script with hash and dependency tags
  token_script(id) {
    return query.token_script(id, this.subgraph, this.contracts)
  }

  // Query token generator html file
  token_generator(id) {
    return query.token_generator(id, this.subgraph, this.contracts)
  }
}

export default ArtBlocks