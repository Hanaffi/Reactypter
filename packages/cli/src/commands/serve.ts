import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

export const serveCommand = new Command()
    .command('serve [filename] ')
    .description('Open a file for editing')
    .option('-p, --port <number>', 'port to run server on', '4005')
    .action(async (filename = 'notebook.js', options: { port: string }) => {
        try {
            const dir = path.join(process.cwd(), path.dirname(filename));
            await serve(+options.port, path.basename(filename), dir);
            console.log(`
                Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file
            
            `);
        } catch (err) {
            if (err.code === 'EADDRINUSE') {
                console.error('Port is in use, try another one please!');
            } else {
                console.log('Here is the problem', err.message);
            }
            process.exit(1);
        }
    });
