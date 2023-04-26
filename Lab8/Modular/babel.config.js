module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      [
        "@babel/preset-env",{
        "corejs":3.6,
        "useBuiltIns":"usage",
        "debug":true
        },
        "@babel/preset-react"
      ]
    ];
    const plugins = [];
  
    return {
      presets,
      plugins
    };
}
