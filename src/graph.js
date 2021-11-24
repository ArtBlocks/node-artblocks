import fetch from 'node-fetch'

async function artblocks_subgraph(query, subgraph) {

  // Request variable query from the graph deployment
  const response = await fetch(subgraph, {
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