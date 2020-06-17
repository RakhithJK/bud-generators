const bud = require('@roots/budpack/build/budpack/bud');

/**
 * Editor assets
 *
 * These assets are only enqueued in the editor.
 */
bud.entry('editor', [
  bud.resolve('src/blocks/editor.js'),
  bud.resolve('src/blocks/editor.css'),
])

/**
 * Public assets
 *
 * These assets are enqueued on public pages
 * as well as in the editor.
 */
bud.entry('public', [
  bud.resolve('src/blocks/public.js'),
  bud.resolve('src/blocks/public.css'),
])

module.exports = bud
