// Colyseus Cloud runs the app via PM2 using this file. `script` points at the
// compiled server entry (built by `npm run build` during deploy).
module.exports = {
  apps: [
    {
      name: 'night-drift',
      script: 'build/server/index.js',
      time: true,
    },
  ],
}
