# JavaScript Profiling

## Chrome DevTools

1. Open DevTools (F12)
2. Performance tab
3. Record, perform action, stop

## Node.js Profiling

```bash
# CPU profiling
node --cpu-prof app.js

# Generate report
node inspect app.js
```

## 0x

```bash
# Install
npx 0x app.js

# Or production
npx 0x -P app.js
```

## Webpack Bundle Analyzer

```javascript
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [new BundleAnalyzerPlugin()]
};
```

Run:
```bash
webpack --profile --json > stats.json
```