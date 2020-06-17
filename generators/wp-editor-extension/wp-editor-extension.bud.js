/**
 * bud generate editor-plugin
 */

// prettier-ignore
module.exports = {
  name: 'wp-editor-extension',
  description: 'Generate a new WordPress editor plugin',
  prompts: [
    {
      type: 'input',
      name: 'pluginName',
      message: 'Name',
      initial: 'acme-plugin',
      required: true,
    },
  ],
  tasks: [
    {
      task: 'compile',
      src: 'plugin.js.hbs',
      dest: 'src/plugins/{{lowercase (dashcase pluginName)}}/plugin.js',
    },
  ],
}
