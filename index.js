const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();

const cors = require('cors');

server.use(
    express.json(),
    helmet(),
    logger('dev'),
    cors()
);

const PORT = process.env.PORT || 4242;



server.listen(PORT, ()=>{
    console.log("Please Work");
})
