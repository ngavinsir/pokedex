module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/styles(.*)$": "<rootDir>/src/styles$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/context(.*)$": "<rootDir>/src/context$1",
    "^@/test(.*)$": "<rootDir>/src/test$1"
  }
}
