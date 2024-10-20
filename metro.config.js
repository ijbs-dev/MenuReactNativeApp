const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],  // adicione as extensões de arquivo corretas
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
