module.exports = function karmaConf(confObj) {
  confObj.set({
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    singleRun: true,
    files: [
      'src/**/*js',
      'test/specs/**/*js'
    ]
  });
};
