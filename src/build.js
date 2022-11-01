import templates from './templates.js'

function template(dependency, dependency_url, project_script, token_data) {
  token_data = `let tokenData = ${JSON.stringify(token_data)}`
  switch(dependency) {
    case "js":
      return templates.js(token_data, project_script)
    case "p5js":
      return templates.p5js(token_data, project_script, dependency_url)
    case "threejs":
      return templates.threejs(token_data, project_script, dependency_url)
    case "processing":
      return templates.processing(token_data, project_script, dependency_url)
    case "regl":
      return templates.regl(token_data, project_script, dependency_url)
    case "tonejs":
      return templates.tonejs(token_data, project_script, dependency_url)
    case "svg":
      return templates.svg(token_data, project_script, dependency_url)
    case "a-frame":
      return templates.aframe(token_data, project_script, dependency_url)
    case "babylonjs":
      return templates.babylonjs(token_data, project_script, dependency_url)
    default:
      throw new Error(`Unsupported build template for requested script type: ${dependency}`)
  }
}

export default { template }