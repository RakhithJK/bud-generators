// prettier-ignore
module.exports = {
  name: 'plugin',
  description: 'Generate a new plugin',
  tasks: [
    {
      task: 'copy',
      src: 'storage/.gitignore',
      dest: 'storage/.gitignore',
    },
    {
      task: 'copy',
      src: 'storage/cache/.gitignore',
      dest: 'storage/cache/.gitignore',
    },
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
      src: 'babel.config.js',
      dest: 'babel.config.js',
      parser: 'babel',
    },
    {
      task: 'compile',
      src: '.editorconfig',
      dest: '.editorconfig',
    },
    {
      task: 'compile',
      src: '.eslintrc.js',
      dest: '.eslintrc.js',
      parser: 'babel',
    },
    {
      task: 'compile',
      src: '.eslintignore',
      dest: '.eslintignore',
    },
    {
      task: 'compile',
      src: '.gitignore',
      dest: '.gitignore',
    },
    {
      task: 'compile',
      src: 'postcss.config.js',
      dest: 'postcss.config.js',
      parser: 'babel',
    },
    {
      task: 'compile',
      src: 'prettier.config.js',
      dest: 'prettier.config.js',
      parser: 'babel',
    },
    {
      task: 'compile',
      src: '.prettierignore',
      dest: '.prettierignore',
    },
    {
      task: 'compile',
      src: 'stylelint.config.js',
      dest: 'stylelint.config.js',
      parser: 'babel',
    },
    {
      task: 'compile',
      src: 'uninstall.php.hbs',
      dest: 'uninstall.php',
    },
    {
      task: 'compile',
      src: 'config/plugin.php.hbs',
      dest: 'config/plugin.php',
    },
    {
      task: 'compile',
      src: 'config/block.php.hbs',
      dest: 'config/block.php',
    },
    {
      task: 'compile',
      src: 'config/bindings.php.hbs',
      dest: 'config/bindings.php',
    },
    {
      task: 'compile',
      src: 'bud/lib/bootstrap.php.hbs',
      dest: 'bud/lib/bootstrap.php',
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
      src: 'app/Plugin/Main.php.hbs',
      dest: 'app/Plugin/Main.php',
    },
    {
      task: 'compile',
      src: 'app/Asset/Registration.php.hbs',
      dest: 'app/Asset/Registration.php',
    },
    {
      task: 'addDependencies',
      repo: 'packagist',
      dev: false,
      pkgs: ['roots/bud-support'],
    },
    {
      task: 'addDependencies',
      repo: 'npm',
      dev: true,
      pkgs: ['@roots/bud-support'],
    },
  ],
}
