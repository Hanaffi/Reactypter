import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
    return {
        name: 'unpkg-path-plugin',
        setup(build: esbuild.PluginBuild) {
            // Entry
            build.onResolve({ filter: /(^index\.js$)/ }, (args: any) => {
                return { path: args.path, namespace: 'a' };
            });

            // Relative module
            build.onResolve({ filter: /^\.+\// }, (args: any) => {
                return {
                    namespace: 'a',
                    path: new URL(
                        args.path,
                        'https://unpkg.com' + args.resolveDir + '/'
                    ).href
                };
            });

            // Main file of the module
            build.onResolve({ filter: /.*/ }, async (args: any) => {
                return {
                    namespace: 'a',
                    path: `https://unpkg.com/${args.path}`
                };
            });
        }
    };
};
