const express = require('express');
require ('dotenv').config();
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const articleRouter = require('./routers/articleRouter');
const likeRouter = require('./routers/likeRouter');
const commentRouter = require('./routers/commentRouter');
const bookmarkRouter = require('./routers/bookmarkRouter');


const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(userRouter);
app.use(categoryRouter);
app.use(articleRouter);
app.use(likeRouter);
app.use(commentRouter);
app.use(bookmarkRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});