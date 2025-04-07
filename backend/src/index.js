import { config } from 'dotenv';
config();

import app from './app.js';
import connectToDB from './db/connection.js';

const PORT = process.env.PORT || 6000;

connectToDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to http://localhost:${PORT} & MongoDB 🤟`);
        });
    })
    .catch((err) => console.log(err));
