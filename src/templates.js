function js(data="", script="") {
  let template = `<html>
  <head>
    <meta charset="utf-8">
    <script>${data}</script>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <canvas></canvas>
    <script>${script}</script>
  </body>
</html>`
  return template
}

function p5js(data="", script="", dependency_url="") {
  let template = `<html>
  <head>
    <meta charset="utf-8">
    <script src=${dependency_url}></script>
    <script>${data}</script>
    <script>${script}</script>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
</html>`
  return template
}

function threejs(data="", script="", dependency_url="") {
  let template = `<html>
  <head>
    <script src=${dependency_url}></script>
    <meta charset="utf-8">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body></body>
  <script>${data}</script>
  <script>${script}</script>
</html>`
  return template
}

function processing(data="", script="", dependency_url="") {
  let template = `<html>
  <head>
    <meta charset="utf-8">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <script src=${dependency_url}></script>
    <script>${data}</script>
    <script type="application/processing">${script}</script>
    <canvas></canvas>
  </body>
</html>`
  return template
}

function regl(data="", script="", dependency_url=""){
  let template = `<html>
  <head>
    <script src=${dependency_url}></script>
    <script>${data}</script>
    <meta charset="utf-8">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <script>${script}</script>
  </body>
</html>`
  return template
}

function tonejs(data="", script="", dependency_url="") {
  let template = `<html>
  <head>
    <script src=${dependency_url}></script>
    <meta charset="utf-8">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <canvas></canvas>
  </body>
  <script>${data}</script>
  <script>${script}</script>
</html>`
  return template
}

function svg(data="", script="", dependency_url="") {
  let template = `<html>
  <head>
    <script src=${dependency_url}></script>
    <meta charset="utf-8">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body></body>
  <script>${data}</script>
  <script>${script}</script>
</html>`
  return template
}

function aframe(data="", script="", dependency_url="") {
  let template = `<html>
  <head>
    <script>${data}</script>
    <script src=${dependency_url}></script>
    <meta charset="utf-8">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <canvas></canvas>
  </body>
  <script>${script}</script>
</html>`
  return template
}

function babylonjs(data="", script="", dependency_url="") {
  let template = `<html>
  <head>
    <script>${data}</script>
    <script src=${dependency_url}></script>
    <meta charset="utf-8">
    <style type="text/css">
      html {
        height: 100%;
      }
      body {
        min-height: 100%;
        margin: 0;
        padding: 0;
      }
      canvas {
        padding: 0;
        margin: auto;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <canvas id="babylon-canvas"></canvas>
  </body>
  <script>${script}</script>
</html>`
  return template
}

export default {
  js,
  p5js,
  threejs,
  processing,
  regl,
  tonejs,
  svg,
  aframe,
  babylonjs
}