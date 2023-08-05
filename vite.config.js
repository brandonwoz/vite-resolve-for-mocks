import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const env = process.env.myEnv;

const apiPath = env === 'production' ? 'api' : 'api/mocks';
const fullApiPath = fileURLToPath(new URL(apiPath, import.meta.url));

export default defineConfig({
    resolve: {
        alias: {
            './api': fullApiPath,
        },
    },
});
