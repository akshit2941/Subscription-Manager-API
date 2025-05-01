import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Sub Manager');
});

app.listen(3000, () => {
    console.log('Server Running on PORT 3000 || http://localhost:3000');
})

export default app;