// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Define the path to your library's root (one level up)
const projectRoot = __dirname;
const libraryRoot = path.resolve(projectRoot, ".."); // Points to /your-local-library-name/

// Add the library root to the watchFolders
config.watchFolders = [libraryRoot];

// Configure the resolver to find node_modules from both the example and library roots
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"), // example/node_modules
  path.resolve(libraryRoot, "node_modules"), // your-local-library-name/node_modules
];

// Optional: Enable symlink support (might help in some cases)
config.resolver.unstable_enableSymlinks = true;

module.exports = config;
