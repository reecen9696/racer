// Colyseus Cloud-compatible app config: @colyseus/tools binds the transport for
// us (unix sockets + multi-process on Cloud, plain TCP locally via PORT).
// Express serves the built client from dist/ so the game and the room server
// share one origin — the client connects to wss://<same-host> in production.
import config from '@colyseus/tools'
import express from 'express'
import path from 'node:path'
import { DriftRoom } from './DriftRoom'

export default config({
  initializeGameServer: (gameServer) => {
    gameServer.define('drift', DriftRoom)
  },

  initializeExpress: (app) => {
    // cwd is the app root (game/) both under `npm run server` and under PM2,
    // whose cwd defaults to the ecosystem.config.js directory
    const dist = path.resolve(process.cwd(), 'dist')
    app.use(express.static(dist))
  },
})
