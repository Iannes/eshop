
require('dotenv').config({ path:'./.env'});

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Use express middleware to handle cookies

// Use express middleware to populate current user


// Spin up the server
server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
});