// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// Custom #CONFIG
// Changed the default config to add react-native-svg-transformer
// Source: https://github.com/kristerkari/react-native-svg-transformer
// Go to demo block and select react-native-svg-expo-example

// The aim to add this library is to avoid the weird behaviour when we navigate 
// between screens. We add in the tabBar svgs using react-native-svg library and 
// when we are not in the main screen, there was invisible navigation that it was 
// redirecting to /settings tab. That one does not solve
// TODO: Delete that library

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();

//https://github.com/expo/router/issues/518