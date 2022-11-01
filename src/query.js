import utils from './utils.js'
import graph from './graph.js'
import build from './build.js'
import metadata from './metadata.js'
import script from './script.js'

// Query anything at all
async function custom(x, subgraph) {
  return await graph.artblocks_subgraph(x, subgraph)
}

// Query all available projects
async function projects(subgraph, contracts) {
  let { projects } = await graph.artblocks_subgraph(
`{
  projects(first: 1000, orderBy: projectId, where: {contract_in: ${utils.arr_to_str(contracts)}} ) {
    projectId
    name
    artistName
    contract {
      id
    }
  }
}
`, subgraph)

  let data = []
  for (let project of projects) {
    data.push({
      id : parseInt(project.projectId, 10),
      name : project.name,
      artist : project.artistName,
      contract : project.contract.id
    })
  }
  return data
}

// Query project metadata
async function project_metadata(id, subgraph, contracts) {
  let { projects } = await graph.artblocks_subgraph(
`{
  projects(where: {projectId: "${id}", contract_in: ${utils.arr_to_str(contracts)}}) {
    projectId
    name
    artistName
    curationStatus
    description
    license
    website
    paused
    complete
    locked
    currencySymbol
    pricePerTokenInWei
    invocations
    maxInvocations
    contract {
      id
    }
  }
}
`, subgraph)

  let data = {}
  let project = projects[0]
  data.id = parseInt(project.projectId, 10)
  data.name = project.name
  data.artist = project.artistName
  data.curation_status = project.curationStatus
  data.description = project.description
  data.license = project.license
  data.website = project.website
  data.paused = project.paused
  data.complete = project.complete
  data.locked = project.locked
  data.currency_symbol = project.currencySymbol == null ? "ETH" : project.currencySymbol
  data.price_eth = utils.wei_to_eth(parseInt(project.pricePerTokenInWei, 10))
  data.invocations = parseInt(project.invocations, 10)
  data.invocations_max = parseInt(project.maxInvocations, 10)
  data.contract = project.contract.id
  return data
}

// Query project raw script
async function project_script(id, subgraph, contracts) {
  let { projects } = await graph.artblocks_subgraph(
`{
  projects(where: {projectId: "${id}", contract_in: ${utils.arr_to_str(contracts)}}) {
    projectId
    name
    scriptUpdatedAt
    scriptJSON
    script
    contract {
      id
    }
  }
}
`, subgraph)

  let data = {}
  let project = projects[0]
  let script_json = script.parse_json(project.scriptJSON)
  data.id = parseInt(project.projectId, 10)
  data.name = project.name
  data.last_updated = project.scriptUpdatedAt
  data.script = project.script
  data = Object.assign({}, data, script_json)
  return data
}

// Query token metadata
async function token_metadata(id, subgraph, contracts) {
  let { tokens } = await graph.artblocks_subgraph(
`{
  tokens(where: {tokenId: "${id}", contract_in: ${utils.arr_to_str(contracts)}}) {
    project {
      projectId
      name
      contract {
        id
      }
    }
    tokenId
    invocation
    hash
  }
}
`, subgraph)

  let data = {}
  let token = tokens[0]
  data.project_id = parseInt(token.project.projectId, 10)
  data.project_name = token.project.name
  data.token_id = parseInt(token.tokenId, 10)
  data.token_invocation = parseInt(token.invocation, 10)
  data.token_hash = token.hash
  return data
}

// Query token raw script with hash and dependency tags
async function token_script(id, subgraph, contracts, flex) {
  let { tokens } = await graph.artblocks_subgraph(
`{
  tokens(where: {tokenId: "${id}", contract_in: ${utils.arr_to_str(contracts)}}) {
    project {
      projectId
      scriptJSON
      script
      contract {
        id
        preferredIPFSGateway
        preferredArweaveGateway
      }
      externalAssetDependencies {
        cid
        dependencyType
      }
    }
    tokenId
    invocation
    hash
  }
}
`, subgraph)

  let data = {}
  let token = tokens[0]
  let script_json = script.parse_json(token.project.scriptJSON)
  data.token_id = parseInt(token.tokenId, 10)
  data.token_invocation = parseInt(token.invocation, 10)
  data.token_dependencies = {
    dependency : script_json.dependency,
    dependency_version : script_json.dependency_version,
    dependency_url : script_json.dependency_url
  }
  data.token_data = metadata.token_data(
    token.project.contract.id, 
    token.hash, 
    token.tokenId, 
    flex, 
    token.project.contract.preferredIPFSGateway, 
    token.project.contract.preferredArweaveGateway, 
    token.project.externalAssetDependencies
  )
  data.token_script = token.project.script
  return data
}

// Query token generator html file
async function token_generator(id, subgraph, contracts, flex) {
  let { tokens } = await graph.artblocks_subgraph(
`{
  tokens(where: {tokenId: "${id}", contract_in: ${utils.arr_to_str(contracts)}}) {
    project {
      scriptJSON
      script
      contract {
        id
        preferredIPFSGateway
        preferredArweaveGateway
      }
      externalAssetDependencies {
        cid
        dependencyType
      }
    }
    tokenId
    hash
  }
}
`, subgraph)

  let token = tokens[0]
  let token_data = metadata.token_data(
    token.project.contract.id, 
    token.hash, 
    token.tokenId, 
    flex, 
    token.project.contract.preferredIPFSGateway, 
    token.project.contract.preferredArweaveGateway, 
    token.project.externalAssetDependencies
  )
  let script_json = script.parse_json(token.project.scriptJSON, flex)
  let dependency = script_json.dependency
  let dependency_url = script_json.dependency_url
  let project_script = token.project.script
  return build.template(dependency, dependency_url, project_script, token_data)
}

export default {
  custom,
  projects,
  project_metadata,
  project_script,
  token_metadata,
  token_script,
  token_generator
}