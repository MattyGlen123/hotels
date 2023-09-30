const nextJest = require("next/jest");
 
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/", "**/*.test.{ts,tsx}"],
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true
};

module.exports = createJestConfig(customJestConfig);
