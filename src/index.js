import query from './query.js'

class ArtBlocks {
  
  constructor(api="thegraph", network="mainnet") {

    // TODO
    // Standardized interface for Infura and other data providers
    // Both Infura and The Graph will eventually require user authentification
    if (api != "thegraph") {
      throw new Error("Supported APIs include 'thegraph'.")
    }
    if (!["mainnet", "ropsten"].includes(network)) {
      throw new Error("Supported networks include 'mainnet' and 'ropsten'.")
    }
    this.api = api
    this.network = network
  }

  // Query all available projects
  projects() {
    return query.projects(this.network)
  }
  
  // Query project metadata
  project_metadata(id) {
    return query.project_metadata(id, this.network)
  }

  // Query project raw script
  project_script(id) {
    return query.project_script(id, this.network)
  }

  // Query token metadata
  token_metadata(id) {
    return query.token_metadata(id, this.network)
  }

  // Query token raw script with hash and dependency tags
  token_script(id) {
    return query.token_script(id, this.network)
  }

  // Query token generator html file
  token_generator(id) {
    return query.token_generator(id, this.network)
  }
}

export default ArtBlocks