import getUsersRouter from './routers/usersRouter.js';
import express from 'express';
import cors from 'cors';

// const express = require ('express');
// const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', getUsersRouter);

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});