import express from 'express';
import env from './config/EnvConfig';

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
    console.log('Pinged here');
    res.send('pong')
})

app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
})