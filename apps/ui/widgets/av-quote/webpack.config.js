const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeAvQuote',

  exposes: {
    './Component': './apps/ui/widgets/av-quote/src/app/app.component.ts',
    './web-components': './apps/ui/widgets/av-quote/src/bootstrap.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
