module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./src/tests/setup.js'],
    testTimeout: 30000,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/**/*.test.js',
    ],
  };
  