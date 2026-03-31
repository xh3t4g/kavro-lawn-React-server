import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', router)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(4040, () => {
    console.log('Успешный запуск http://localhost:4040')
});
