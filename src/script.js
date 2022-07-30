// Content delivery network urls
function dependency_url(dependency) {
  switch(dependency) {
    case "p5js":
      return `"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"`
    case "paperjs": 
      return `"https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js"`
    case "processing": 
      return `"https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.6/processing.min.js"`
    case "a-frame": 
      return `"https://cdnjs.cloudflare.com/ajax/libs/aframe/1.2.0/aframe.min.js"`
    case "threejs": 
      return `"https://cdnjs.cloudflare.com/ajax/libs/three.js/r124/three.min.js"`
    case "vox": 
      return ""
    case "megavox": 
      return ""
    case "js": 
      return ""
    case "svg": 
      return ""
    case "regl": 
      return `"https://cdnjs.cloudflare.com/ajax/libs/regl/2.1.0/regl.min.js"`
    case "zdog": 
      return `"https://unpkg.com/zdog@1/dist/zdog.dist.min.js"`
    case "tonejs": 
      return `"https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.15/Tone.js"`
    case "babylonjs":
      return `"https://cdnjs.cloudflare.com/ajax/libs/babylonjs/5.0.0/babylon.js"`
    default:
      throw new Error("Unsupported dependency.")
  }
}

// Script json can vary between contract types
function parse_json(json, pbab=false) {
  let x = JSON.parse(json)
  return {
    dependency : x.type,
    dependency_version : x.version,
    dependency_url : dependency_url(x.type),
    interactive : x.interactive,
    animation_length_sec : x.animationLengthInSeconds,
    instructions : x.instructions
  }
}

export default { parse_json }