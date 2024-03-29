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

  context("project_script()", function() {
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

  context("token_metadata()", function() {
    it("should return metadata for a given token", function() {
      return artblocks.token_metadata(1000).then(function(x) {
          expect(x.project_id).to.equal(0)
          expect(x.token_id).to.equal(1000)
          expect(x.project_name).to.equal("Chromie Squiggle")
          expect(x.token_hash).to.equal("0xfef2aca5be3fe64a87dfc69b64622cb7377a847c2dc378a3f0ed8be794412b22")
      })
    })
  })

  context("token_script()", function() {
    it("should return script for a given token", function() {
      return artblocks.token_script(1000).then(function(x) {
          expect(x.token_id).to.equal(1000)
          expect(x.token_dependencies.dependency).to.equal("p5js")
          expect(x.token_script.length).to.be.greaterThan(2500)
      })
    })
  })

  context("token_generator()", function() {
    it("should return generator for a given token", function() {
      return artblocks.token_generator(1000).then(function(x) {
          expect(x.length).to.be.greaterThan(2500)
      })
    })
  })
})

describe("Goerli", function() {
  
  let artblocks = new ArtBlocks("thegraph", "goerli", ["0xda62f67be7194775a75be91cbf9feedcc5776d4b"])
  
  context("projects()", function() {
    it("should return multiple projects", function() {
      return artblocks.projects().then(function(x) {
          expect(x.length).to.be.above(1)
          expect(x[0].id).to.equal(3)
          expect(x[0].contract).to.equal("0xda62f67be7194775a75be91cbf9feedcc5776d4b")
      })
    })
  })

  context("project_metadata()", function() {
    it("should return metadata for a given project", function() {
      return artblocks.project_metadata(3).then(function(x) {
          expect(x.id).to.equal(3)
      })
    })
  })

  context("project_script()", function() {
    it("should return script for a given project", function() {
      return artblocks.project_script(19).then(function(x) {
          expect(x.id).to.equal(19)
          expect(x.dependency).to.equal("js")
          expect(x.script.length).to.be.greaterThan(1000)
      })
    })
  })

  context("token_metadata()", function() {
    it("should return metadata for a given token", function() {
      return artblocks.token_metadata(19000000).then(function(x) {
          expect(x.project_id).to.equal(19)
          expect(x.token_id).to.equal(19000000)
          expect(x.token_hash).to.equal("0xba7a688859c59a246816423d0f5cb56db8403488c2e3d5a5f27a98bfd17b61b6")
      })
    })
  })

  context("token_script()", function() {
    it("should return script for a given token", function() {
      return artblocks.token_script(19000000).then(function(x) {
          expect(x.token_id).to.equal(19000000)
          expect(x.token_dependencies.dependency).to.equal("js")
          expect(x.token_script.length).to.be.greaterThan(500)
      })
    })
  })

  context("token_generator()", function() {
    it("should return generator for a given token", function() {
      return artblocks.token_generator(19000000).then(function(x) {
          expect(x.length).to.be.greaterThan(500)
      })
    })
  })
})

describe("Flex", function() {
  
  let artblocks = new ArtBlocks("thegraph", "goerli", ["0x9ff1079a71dd0c77336466a008a4bb817028613c"], true)
  
  context("projects()", function() {
    it("should return multiple projects", function() {
      return artblocks.projects().then(function(x) {
          expect(x.length).to.be.above(1)
          expect(x[0].id).to.equal(0)
          expect(x[0].contract).to.equal("0x9ff1079a71dd0c77336466a008a4bb817028613c")
      })
    })
  })
  
  context("project_metadata()", function() {
    it("should return metadata for a given project", function() {
      return artblocks.project_metadata(0).then(function(x) {
          expect(x.id).to.equal(0)
      })
    })
  })

  context("project_script()", function() {
    it("should return script for a given project", function() {
      return artblocks.project_script(0).then(function(x) {
          expect(x.id).to.equal(0)
          expect(x.dependency).to.equal("svg")
          expect(x.script.length).to.be.greaterThan(1000)
      })
    })
  })

  context("token_metadata()", function() {
    it("should return metadata for a given token", function() {
      return artblocks.token_metadata(2).then(function(x) {
          expect(x.project_id).to.equal(0)
          expect(x.token_id).to.equal(2)
          expect(x.token_hash).to.equal("0x864721473c6cc1731797c8a549789b41cfb95c708e7316a2790be7aa397e6868")
      })
    })
  })

  context("token_script()", function() {
    it("should return script for a given token", function() {
      return artblocks.token_script(2).then(function(x) {
          expect(x.token_id).to.equal(2)
          expect(x.token_dependencies.dependency).to.equal("svg")
          expect(x.token_script.length).to.be.greaterThan(500)
      })
    })
  })

  context("token_generator()", function() {
    it("should return generator for a given token", function() {
      return artblocks.token_generator(2).then(function(x) {
          expect(x.length).to.be.greaterThan(500)
      })
    })
  })
})
