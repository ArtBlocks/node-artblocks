import ArtBlocks from "../src/index.js"
import { expect } from 'chai'

describe("Mainnet", function() {
  
  let artblocks = new ArtBlocks("thegraph", "mainnet")
  
  context("projects()", function() {
    it("should return multiple projects", function() {
      return artblocks.projects().then(function(x) {
          expect(x.length).to.be.above(1)
          expect(x[0].id).to.equal(0)
          expect(x[0].name).to.equal("Chromie Squiggle")
          expect(x[0].artist).to.equal("Snowfro")
          expect(x[0].contract).to.equal("0x059edd72cd353df5106d2b9cc5ab83a52287ac3a")
      })
    })
  })

  context("project_metadata()", function() {
    it("should return metadata for a given project", function() {
      return artblocks.project_metadata(0).then(function(x) {
          expect(x.id).to.equal(0)
          expect(x.name).to.equal("Chromie Squiggle")
          expect(x.artist).to.equal("Snowfro")
          expect(x.contract).to.equal("0x059edd72cd353df5106d2b9cc5ab83a52287ac3a")
      })
    })
  })

  context("project_script(0)", function() {
    it("should return script for a given project", function() {
      return artblocks.project_script(0).then(function(x) {
          expect(x.id).to.equal(0)
          expect(x.dependency).to.equal("p5js")
          expect(x.dependency_version).to.equal("1.0.0")
          expect(x.dependency_url).to.equal('"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"')
          expect(x.script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_metadata(1000)", function() {
    it("should return metadata for a given token", function() {
      return artblocks.token_metadata(1000).then(function(x) {
          expect(x.project_id).to.equal(0)
          expect(x.token_id).to.equal(1000)
          expect(x.project_name).to.equal("Chromie Squiggle")
          expect(x.token_hash).to.equal("0xfef2aca5be3fe64a87dfc69b64622cb7377a847c2dc378a3f0ed8be794412b22")
      })
    })
  })

  context("token_script(1000)", function() {
    it("should return script for a given token", function() {
      return artblocks.token_script(1000).then(function(x) {
          expect(x.token_id).to.equal(1000)
          expect(x.token_dependencies.dependency).to.equal("p5js")
          expect(x.token_script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_script(1000)", function() {
    it("should return script for a given token", function() {
      return artblocks.token_script(1000).then(function(x) {
          expect(x.token_id).to.equal(1000)
          expect(x.token_dependencies.dependency).to.equal("p5js")
          expect(x.token_script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_generator(1000)", function() {
    it("should return generator for a given token", function() {
      return artblocks.token_generator(1000).then(function(x) {
          expect(x.length).to.be.greaterThan(2500)
      })
    })
  })
})

describe("Ropsten", function() {
  
  let artblocks = new ArtBlocks("thegraph", "ropsten", ["0x1cd623a86751d4c4f20c96000fec763941f098a2"])
  
  context("projects()", function() {
    it("should return multiple projects", function() {
      return artblocks.projects().then(function(x) {
          expect(x.length).to.be.above(1)
          expect(x[1].id).to.equal(4)
          expect(x[1].name).to.equal("Reflection")
          expect(x[1].artist).to.equal("Jeff Davis")
          expect(x[1].contract).to.equal("0x1cd623a86751d4c4f20c96000fec763941f098a2")
      })
    })
  })

  context("project_metadata()", function() {
    it("should return metadata for a given project", function() {
      return artblocks.project_metadata(4).then(function(x) {
          expect(x.id).to.equal(4)
          expect(x.name).to.equal("Reflection")
          expect(x.artist).to.equal("Jeff Davis")
          expect(x.contract).to.equal("0x1cd623a86751d4c4f20c96000fec763941f098a2")
      })
    })
  })

  context("project_script(5)", function() {
    it("should return script for a given project", function() {
      return artblocks.project_script(5).then(function(x) {
          expect(x.id).to.equal(5)
          expect(x.dependency).to.equal("a-frame")
          expect(x.dependency_url).to.equal('"https://cdnjs.cloudflare.com/ajax/libs/aframe/1.2.0/aframe.min.js"')
          expect(x.script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_metadata(5000000)", function() {
    it("should return metadata for a given token", function() {
      return artblocks.token_metadata(5000000).then(function(x) {
          expect(x.project_id).to.equal(5)
          expect(x.token_id).to.equal(5000000)
          expect(x.token_hash).to.equal("0x0c883030499931612f595d2de8c9d958e4011751d27f63626ec6aa24590d5bfd")
      })
    })
  })

  context("token_script(5000000)", function() {
    it("should return script for a given token", function() {
      return artblocks.token_script(5000000).then(function(x) {
          expect(x.token_id).to.equal(5000000)
          expect(x.token_dependencies.dependency).to.equal("a-frame")
          expect(x.token_script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_generator(5000000)", function() {
    it("should return generator for a given token", function() {
      return artblocks.token_generator(5000000).then(function(x) {
          expect(x.length).to.be.greaterThan(2500)
      })
    })
  })
})

describe("PBAB", function() {
  
  let artblocks = new ArtBlocks("thegraph", "ropsten", ["0x06710498339b30834653459ac90f52cbd2f1d085"])

  context("projects()", function() {
    it("should return multiple projects", function() {
      return artblocks.projects().then(function(x) {
          expect(x.length).to.be.above(1)
          expect(x[0].id).to.equal(0)
          expect(x[0].name).to.equal("Worlds")
          expect(x[0].artist).to.equal("Kenny Vaden")
          expect(x[0].contract).to.equal("0x06710498339b30834653459ac90f52cbd2f1d085")
      })
    })
  })

  context("project_metadata()", function() {
    it("should return metadata for a given project", function() {
      return artblocks.project_metadata(0).then(function(x) {
          expect(x.id).to.equal(0)
          expect(x.name).to.equal("Worlds")
          expect(x.artist).to.equal("Kenny Vaden")
          expect(x.contract).to.equal("0x06710498339b30834653459ac90f52cbd2f1d085")
      })
    })
  })

  context("project_script(0)", function() {
    it("should return script for a given project", function() {
      return artblocks.project_script(0).then(function(x) {
          expect(x.id).to.equal(0)
          expect(x.dependency).to.equal("p5js")
          expect(x.dependency_url).to.equal('"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"')
          expect(x.script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_metadata(100)", function() {
    it("should return metadata for a given token", function() {
      return artblocks.token_metadata(100).then(function(x) {
          expect(x.project_id).to.equal(0)
          expect(x.token_id).to.equal(100)
          expect(x.token_hash).to.equal("0x4236ba3fe48be4d29e8a789323ae37032675a819aadc5ae0312eb572a97ee90c")
      })
    })
  })

  context("token_script(100)", function() {
    it("should return script for a given token", function() {
      return artblocks.token_script(100).then(function(x) {
          expect(x.token_id).to.equal(100)
          expect(x.token_dependencies.dependency).to.equal("p5js")
          expect(x.token_script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_generator(100)", function() {
    it("should return generator for a given token", function() {
      return artblocks.token_generator(100).then(function(x) {
          expect(x.length).to.be.greaterThan(100)
      })
    })
  })
})
