module.exports = {
  apps: [
    {
      name: 'task-tree',
      script: 'server.cjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
