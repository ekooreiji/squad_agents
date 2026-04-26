# Bundle Optimization

## Técnicas

| Técnica | Redução |
|---------|---------|
| Tree shaking | 30-50% |
| Code splitting | Variável |
| Minification | 30% |
| Compression (gzip/brotli) | 70% |

## Webpack

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
        },
      },
    },
  },
};
```

## Parcel

```javascript
// parcel.config.js
module.exports = {
  minifier: true,
  treeShaking: true,
};
```

## Ferramentas

- webpack-bundle-analyzer
- source-map-explorer
- rollup-plugin-treeshake