const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfeVkTool',

  exposes: {
    './Component': './apps/ui/widgets/vk-tool/src/app/app.component.ts',
    './web-components': './apps/ui/widgets/vk-tool/src/bootstrap.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
