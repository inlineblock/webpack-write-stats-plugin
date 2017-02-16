const WebpackWriteStatsPlugin = require('../index');

describe('WebpackWriteStatsPlugin', () => {
  it('should add done to compiler on apply', () => {
    const webpackPlugin = new WebpackWriteStatsPlugin('file');
    const plugin = jest.fn();
    webpackPlugin.apply({
      plugin,
    });
    expect(plugin.mock.calls.length).toBe(1);
    expect(plugin.mock.calls[0][0]).toBe('done');
    expect(plugin.mock.calls[0][1]).toBe(webpackPlugin.onDone);
  });
  it('should run stats with statsConfig', () => {
    const webpackPlugin = new WebpackWriteStatsPlugin('file', {
      colors: false,
    });
    const toJson = jest.fn();
    webpackPlugin.onDone({
      toJson,
    });
    expect(toJson.mock.calls.length).toBe(1);
    expect(toJson.mock.calls[0][0]).toEqual(webpackPlugin.statsConfig);
  });
});
