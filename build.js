const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['./tabs/tabs.tsx'],
    bundle: true,
    outfile: './assets/tabs.js',
    loader: { '.tsx': 'tsx' },
    minify: true,
    sourcemap: true,
}).catch(() => process.exit(1));

