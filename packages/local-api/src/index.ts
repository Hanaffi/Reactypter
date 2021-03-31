import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { createCellsRouter } from './routes/cells';
export const serve = (
    port: number,
    filename: string,
    dir: string,
    useProxy: boolean
) => {
    const app = express();
    const packagePath = require.resolve('local-client/build/index.html');
    app.use(createCellsRouter(filename, dir));

    if (!useProxy) {
        app.use(express.static(path.dirname(packagePath)));
    } else {
        // redirect (in developement mode)
        app.use(
            createProxyMiddleware({
                target: 'http://localhost:3000',
                ws: true,
                logLevel: 'silent'
            })
        );
    }
    return new Promise<void>((resolve, reject) => {
        app.listen(port, resolve).on('error', reject);
    });
};
