# webpack-write-stats-plugin
Webpack plugin that writes the stats information to a defined file on build completion


# Installing
`$ npm install webpack-write-stats-plugin`

# Using
In your webpack config file:

### webpack.config.json
```javascript
const path = require('path');
const WebpackWriteStatsPlugin = require('webpack-write-stats-plugin');

module.exports = { // your configuration
  entry: [ ... ],
  loaders: [ ... ],
  plugins: [
    new WebpackWriteStatsPlugin(path.resolve(__dirname, 'webpack-stats.json')),
  ]
};

```

# Configuration
WebpackWriteStatsPlugin takes 2 parameters:

`new WebpackWriteStatsPlugin(fileLocation, [statsConfiguation={}])`

* fileLocation (path): File path to write the stats to. Default webpack.json.
* statsConfiguration (object): Configuration to send to stats. Default is {}. For more information, visit: [https://webpack.js.org/configuration/stats/#stats](https://webpack.js.org/configuration/stats/#stats)


# Run tests

To run the tests, written in jest:

`npm run test`
