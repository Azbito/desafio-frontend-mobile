module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    ],
  ],
};
