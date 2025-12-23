import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => {
    if (command === 'serve') {
        return {
            root: 'src/dev',
            plugins: [react()],
            server: {
                host: '0.0.0.0',
                port: 5173,
                proxy: {
                    '/api': {
                        target: 'http://localhost:5000',
                        changeOrigin: true,
                        secure: false,
                    },
                },
            }
        };
    }
    return {
        plugins: [react()],
        build: {
            lib: {
                entry: path.resolve('src/index.ts'),
                formats: ['es'],
                fileName: () => 'index.js',
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.name?.endsWith('.css')) {
                            return 'style.css';
                        }
                        return '[name][extname]';
                    },
                },
            },
        },
    };
});
