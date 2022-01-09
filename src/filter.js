function projects_by_contracts(projects, contracts) {
  return projects.filter(project => contracts.includes(project.contract.id))
}

function tokens_by_contracts(tokens, contracts) {
  return tokens.filter(token => contracts.includes(token.project.contract.id))
}

export default {
  projects_by_contracts,
  tokens_by_contracts
}