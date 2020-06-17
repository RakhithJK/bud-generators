module.exports = {
  name: 'wp-plugin-budpack',
  description: 'Handle frontend assets',
  tasks: [
    {
      task: 'compile',
      src: 'bud.config.js',
      dest: 'bud.config.js',
    },
    {
      task: 'addDependencies',
      repo: 'npm',
      dev: true,
      pkgs: ['@roots/budpack'],
    },
  ],
}
