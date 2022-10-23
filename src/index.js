import query from './query.js'
import address from './address.js'

// Most recent deployments of ArtBlocks on the graph
const SUBGRAPH_MAINNET="https://api.thegraph.com/subgraphs/name/artblocks/art-blocks"
const SUBGRAPH_GOERLI="https://api.thegraph.com/subgraphs/name/artblocks/art-blocks-artist-staging-goerli"

function get_subgraph_api(network) {
  switch (network) {
    case "mainnet":
      return SUBGRAPH_MAINNET
    case "goerli":
      return SUBGRAPH_GOERLI
    default:
      throw new Error("Supported networks include 'mainnet' and 'goerli'.")
  }
}

class ArtBlocks {
  
  constructor(api="thegraph", 
              network="mainnet",
              contracts=[], 
              flex=false,
              subgraph="") {

    // TODO
    // Standardized interface for Infura and other data providers
    // Both Infura and The Graph will eventually require user authentification
    if (api != "thegraph") {
      throw new Error("Supported APIs include 'thegraph'.")
    }

    // ArtBlocks (mainnet/goerli) or custom subgraph endpoint
    if (subgraph != "") {
      this.subgraph = subgraph
    } else {
      if (!["mainnet", "goerli"].includes(network)) {
        throw new Error("Supported networks include 'mainnet' and 'goerli'.")
      }
      this.subgraph = get_subgraph_api(network)
    }
    
    // Default contracts
    if (contracts.length == 0) {
      if (network == "mainnet") {
        contracts = [address.artblocks.mainnet.v0, address.artblocks.mainnet.v1]
      } else {
        throw new Error("Must provide contracts for Goerli projects.")
      }
    }

    this.api = api
    this.network = network
    this.contracts = contracts.map(x => x.toLowerCase())
    this.flex = flex
  }

  // Query anything at all
  custom(x) {
    return query.custom(x, this.subgraph)
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
    return query.token_script(id, this.subgraph, this.contracts, this.flex)
  }

  // Query token generator html file
  token_generator(id) {
    return query.token_generator(id, this.subgraph, this.contracts, this.flex)
  }
}

export default ArtBlocks
