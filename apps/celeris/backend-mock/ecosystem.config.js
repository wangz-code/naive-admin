// ecosystem.config.js
module.exports = {
  apps: [{
    name: "nitro-api",
    script: "./.output/server/index.mjs",
    env: {
      NITRO_PORT: 3300,
      NODE_ENV: "production"
    }
  }]
}
