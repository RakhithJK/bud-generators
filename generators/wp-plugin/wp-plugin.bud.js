module.exports = {
  name: 'wp-plugin',
  description: 'Generate a new plugin',
  tasks: [
    {
      task: 'compile',
      src: 'README.md.hbs',
      dest: 'README.md',
      parser: 'markdown',
    },
    {
      task: 'compile',
      src: 'LICENSE.md.hbs',
      dest: 'LICENSE.md',
      parser: 'markdown',
    },
    {
      task: 'compile',
      src: 'plugin.php.hbs',
      dest: 'plugin.php',
    },
    {
      task: 'compile',
      src: 'composer.json.hbs',
      dest: 'composer.json',
      parser: 'json',
    },
    {
      task: 'compile',
      src: '.editorconfig',
      dest: '.editorconfig',
    },
    {
      task: 'compile',
      src: '.gitignore',
      dest: '.gitignore',
    },
    {
      task: 'compile',
      src: 'uninstall.php.hbs',
      dest: 'uninstall.php',
    },
    {
      task: 'compile',
      src: 'bud.config.js',
      dest: 'bud.config.js',
    },
    {
      task: 'compile',
      src: 'src/blocks/editor.css',
      dest: 'src/blocks/editor.css',
    },
    {
      task: 'compile',
      src: 'src/blocks/editor.js',
      dest: 'src/blocks/editor.js',
    },
    {
      task: 'compile',
      src: 'src/blocks/public.css',
      dest: 'src/blocks/public.css',
    },
    {
      task: 'compile',
      src: 'src/blocks/public.js',
      dest: 'src/blocks/public.js',
    },
    {
      task: 'compile',
      src: 'config/services.php.hbs',
      dest: 'config/services.php',
    },
    {
      task: 'compile',
      src: 'config/plugin.php.hbs',
      dest: 'config/plugin.php',
    },
    {
      task: 'compile',
      src: 'app/Plugin/Activate.php.hbs',
      dest: 'app/Plugin/Activate.php',
    },
    {
      task: 'compile',
      src: 'app/Plugin/Deactivate.php.hbs',
      dest: 'app/Plugin/Deactivate.php',
    },
    {
      task: 'compile',
      src: 'app/Services/Main.php.hbs',
      dest: 'app/Services/Main.php',
    },
    {
      task: 'compile',
      src: 'app/Services/Register.php.hbs',
      dest: 'app/Services/Register.php',
    },
    {
      task: 'addDependencies',
      repo: 'npm',
      dev: true,
      pkgs: ['@roots/budpack'],
    },
    {
      task: 'install',
      repo: 'packagist',
    },
  ],
}
