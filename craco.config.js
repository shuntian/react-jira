const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#rgb(255, 128, 0)',
              '@font-size': '16px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
