import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

const env = 'dev';

const apiPath = env === 'production' ? 'api' : 'api/mocks';
const fullApiPath = fileURLToPath(new URL(apiPath, import.meta.url));

export default defineConfig({
    resolve: {
        alias: {
            './api': fullApiPath,
        },
    },
});
