const fs = require('fs');

function WebpackWriteStatsPlugin (file, statsConfig) {
  this.file = file || 'webpack.json';
  this.statsConfig = statsConfig || {};
  this.apply = this.apply.bind(this);
  this.onDone = this.onDone.bind(this);
}
WebpackWriteStatsPlugin.prototype.apply = function apply (compiler) {
  compiler.plugin('done', this.onDone);
};
WebpackWriteStatsPlugin.prototype.onDone = function onDone (stats) {
  const data = stats.toJson(this.statsConfig);
  fs.writeFileSync(this.file, JSON.stringify(data));
};

module.exports = WebpackWriteStatsPlugin;
