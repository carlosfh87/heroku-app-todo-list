module.exports = {
  // ... other configurations
  moduleNameMapper: {
    '^@testing-library/(.*)$': '<rootDir>/node_modules/@testing-library/jest-dom/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  // ... other configurations
};
