module.exports = function () {
  // TODO 根据platform，分别输出真对小程序和h5的配置
  const presets = [
    ['@babel/preset-env', {
      'targets': {
        'browsers': [
          'Android >= 4',
          'iOS >= 10'
        ]
      }
    }]
  ]
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        'helpers': false,
        'regenerator': true
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}
