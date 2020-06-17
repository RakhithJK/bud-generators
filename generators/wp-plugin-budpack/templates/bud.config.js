const bud = require('@roots/budpack/build/budpack/bud');

/*
 |--------------------------------------------------------------------------
 | Bud asset management
 |--------------------------------------------------------------------------
 |
 | Bud provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the CSS file for
 | your application and editor extensions.
 |
 */

bud.project(__dirname)
bud.dist('dist')

.entry('app', [
  bud.resolve('resources/assets/scripts/app.js'),
])

.hash(false)
.maps(false)
.mini(false)
.hot(false)
.watch(false)

module.exports = bud
