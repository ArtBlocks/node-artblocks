import templates from './templates.js'

function template(type, data="", script="", dependency="") {
  switch(type) {
    case "js":
      return templates.js(data, script)
    case "p5js":
      return templates.p5js(data, script, dependency)
    case "threejs":
      return templates.threejs(data, script, dependency)
    case "processing":
      return templates.processing(data, script, dependency)
    case "regl":
      return templates.regl(data, script, dependency)
    case "tonejs":
      return templates.tonejs(data, script, dependency)
    case "svg":
      return templates.svg(data, script, dependency)
    case "a-frame":
      return templates.aframe(data, script, dependency)
    default:
      throw new Error("Unsupported build template for requested script type.")
  }
}

export default { template }