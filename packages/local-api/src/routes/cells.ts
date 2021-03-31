import express from 'express';
import fs from 'fs/promises';
import path from 'path';
interface Cell {
    id: string;
    content: string;
    type: 'text' | 'code';
}
export const createCellsRouter = (filename: string, dir: string) => {
    const router = express.Router();
    const fullPath = path.join(dir, filename);
    router.use(express.json());
    router.get('/cells', async (req, res) => {
        // Read the file, If throws an error, then it doesnt exist
        try {
            const result = await fs.readFile(fullPath, { encoding: 'utf-8' });
            res.send(JSON.parse(result));
        } catch (err) {
            if (err.code === 'ENOENT') {
                // Add code to create a file and add default
                await fs.writeFile(fullPath, '[]', 'utf-8');
                res.send([]);
            } else {
                throw err;
            }
        }
    });

    router.post('/cells', async (req, res) => {
        // Make sure the cell storage exist
        // If not, Make default one

        // Take the list of cells from request object
        const { cells }: { cells: Cell[] } = req.body;
        // Serialize them

        // Write the cells into the filel
        await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

        res.send({ status: 'ok' });
    });

    return router;
};
