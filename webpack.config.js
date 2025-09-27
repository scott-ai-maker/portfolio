/* Add your global CSS styles here */

/* Example: */
body {
  margin: 0;
  font-family: sans-serif;
}

:root {
  color-scheme: light; /* Default theme */
}

module.exports = {
  // ...existing code...
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'], // Added .md extension
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Ensure Babel loader is configured for JavaScript/TypeScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Ensure CSS loader is configured
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.md$/, // Exclude Markdown files from being processed by Webpack
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    // Add any necessary plugins here
  ],
  // ...existing code...
};