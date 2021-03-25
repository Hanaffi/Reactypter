import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localForage from 'localforage';

const fileCache = localForage.createInstance({
    // Name of database;
    name: 'filecache'
});
export const fetchPlugin = (inputCode: string) => {
    return {
        name: 'fetch-plugin',
        setup(build: esbuild.PluginBuild) {
            build.onLoad({ filter: /.*/ }, async (args: any) => {
                console.log('onLoad', args);

                if (args.path === 'index.js') {
                    return {
                        loader: 'jsx',
                        contents: inputCode
                    };
                }

                // Check to see if we already have package in cache
                const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
                    args.path
                );
                // If yes : Return it
                if (cachedResult) return cachedResult;
                // If no : Make request
                const { data, request } = await axios.get(args.path);
                const fileType = args.path.match(/.css$/) ? 'css' : 'js';

                const contents =
                    fileType === 'css'
                        ? `
                    const style= document.createElement('style);
                    style.innerText = 'body {background-color:"red"}';
                    document.head.appendChild(style);
                `
                        : data;

                const result: esbuild.OnLoadResult = {
                    loader: 'jsx',
                    contents,
                    resolveDir: new URL('./', request.responseURL).pathname
                };
                await fileCache.setItem(args.path, result);
                return result;
            });
        }
    };
};
