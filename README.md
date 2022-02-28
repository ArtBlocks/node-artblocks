# node-artblocks

![npm](https://img.shields.io/npm/v/artblocks)
[![CircleCI](https://circleci.com/gh/ArtBlocks/node-artblocks/tree/main.svg?style=svg)](https://circleci.com/gh/ArtBlocks/node-artblocks/tree/main)
[![Node.js Package](https://github.com/ArtBlocks/node-artblocks/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ArtBlocks/node-artblocks/actions/workflows/npm-publish.yml)
![GitHub package.json version](https://img.shields.io/github/package-json/v/artblocks/node-artblocks?color=blue&label=development)

An open source [node package](https://www.npmjs.com/package/artblocks) for reading on-chain Art Blocks data and recreating generative art projects. By default the package reads data via the [ArtBlocks Subgraph](https://thegraph.com/explorer/subgraph/artblocks/art-blocks). For those using other languages, use this package as a how-to guide for working directly with ArtBlocks on-chain data.

## Installation

```bash
npm i artblocks
```

## Usage

```javascript
import ArtBlocks from 'artblocks'

// Ethereum mainnet
let artblocks = new ArtBlocks("thegraph", "mainnet");

// Artist staging projects
// Please refrain from sharing these projects publicly
let artblocks = new ArtBlocks("thegraph", "ropsten");
```

## Methods

### Available Projects

```javascript
const response = artblocks.projects()
```

```javascript
Promise {
  [
    { id: 0, name: 'Chromie Squiggle' },
    { id: 1, name: 'Genesis' },
    { id: 2, name: 'Construction Token' },
    { id: 3, name: 'Cryptoblots' },
    { id: 4, name: 'Dynamic Slices' },
    { id: 5, name: 'Variant Plan' },
    { id: 6, name: 'View Card' },
    { id: 7, name: 'Elevated Deconstructions' },
    { id: 8, name: 'Singularity' },
    { id: 9, name: 'Ignition' },
    ...
   ]
}
```

### Project Metadata

```javascript
const response = artblocks.project_metadata(0)
```

```javascript
Promise {
  {
    id: 0,
    name: 'Chromie Squiggle',
    artist: 'Snowfro',
    curation_status: 'curated',
    description: 'Simple and easily identifiable, each squiggle embodies the soul of the Art Blocks platform. Consider each my personal signature as an artist, developer, and tinkerer. Public minting of the Chromie Squiggle is permanently paused. They are now reserved for manual distribution to collectors and community members over a longer period of time. Please visit OpenSea to explore Squiggles available on the secondary market.',
    license: 'NFT License',
    website: 'https://www.twitter.com/artonblockchain',
    paused: true,
    complete: false,
    locked: true,
    currency_symbol: 'ETH',
    price_eth: 0,
    invocations: 9257,
    invocations_max: 10000,
    contract: '0x059edd72cd353df5106d2b9cc5ab83a52287ac3a'
  }
}
```

### Project Script

```javascript
const response = artblocks.project_script(0)
```

```javascript
Promise {
  {
    id: 0,
    name: 'Chromie Squiggle',
    last_updated: '1620363885',
    ependency: 'p5js',
    dependency_version: '1.0.0',
    dependency_url: '"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"',
    interactive: 'true',
    animation_length_sec: undefined,
    instructions: 'click to animate | space bar changes background color',
    script: 'let numHashes = tokenData.hashes.length;\n' +
      'let hashPairs = [];\n' +
      'for (let i = 0; i < numHashes; i++) {\n' +
      '     for (let j = 0; j < 32; j++) {\n' +
      '          hashPairs.push(tokenData.hashes[i].slice(2 + (j * 2), 4 + (j * 2)));\n' +
      '     }\n' +
      '}\n' +
      ...
  }
}
```

### Token Metadata

```javascript
const response = artblocks.token_metadata(0)
```

```javascript
Promise {
  {
    project_id: 0,
    project_name: 'Chromie Squiggle',
    token_id: 0,
    token_invocation: 0,
    token_hash: '0x722899b10c66da3b72fb60a8e71df442ee1c004547ba2227d76bed357469b4ea'
  }
}
```

### Token Script

```javascript
const response = artblocks.token_script(0)
```

```javascript
Promise {
  {
    token_id: 0,
    token_invocation: 0,
    token_dependencies: {
      dependency: 'p5js',
      dependency_version: '1.0.0',
      dependency_url: '"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"'
    },
    token_data: 'let tokenData = {"hashes":["0x722899b10c66da3b72fb60a8e71df442ee1c004547ba2227d76bed357469b4ea"], "tokenId":"0"}',
    token_script: 'let numHashes = tokenData.hashes.length;\n' +
      'let hashPairs = [];\n' +
      'for (let i = 0; i < numHashes; i++) {\n' +
      '     for (let j = 0; j < 32; j++) {\n' +
      '          hashPairs.push(tokenData.hashes[i].slice(2 + (j * 2), 4 + (j * 2)));\n' +
      '     }\n' +
      '}\n' +
      ...
  }
}
```

### Token Generator

```javascript
const response = artblocks.token_generator(0)
```

```javascript
Promise {
  '<!DOCTYPE HTML>\n' +
    '<html lang="en">\n' +
    '  <head>\n' +
    '    <meta charset="utf-8">\n' +
    '    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>\n' +
    '    <script>let tokenData = {"hashes":["0x722899b10c66da3b72fb60a8e71df442ee1c004547ba2227d76bed357469b4ea"], "tokenId":"0"}</script>\n' +
    '    <script>let numHashes = tokenData.hashes.length;\n' +
    'let hashPairs = [];\n' +
    'for (let i = 0; i < numHashes; i++) {\n' +
    '     for (let j = 0; j < 32; j++) {\n' +
    '          hashPairs.push(tokenData.hashes[i].slice(2 + (j * 2), 4 + (j * 2)));\n' +
    '     }\n' +
    '}\n' +
    ...
}
```

### Custom Queries

```javascript
let x = `
{
  projects(
    first: 5,
    orderBy: projectId, 
    orderDirection: desc, 
    where: {curationStatus: "curated"}
  ) 
  {         
    projectId
    name
    artistName
    curationStatus
  }
}
`
```

```javascript
const response = artblocks.custom(x)
```

```javascript
Promise {
  projects: [
    {
      projectId: '225',
      name: 'Vortex',
      artistName: 'Jen Stark',
      curationStatus: 'curated'
    },
    {
      projectId: '215',
      name: 'Gazers',
      artistName: 'Matt Kane',
      curationStatus: 'curated'
    },
    ...
  ]
}
```