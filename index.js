const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(
    cors({
        origin: '*',
    })
);

app.get('/', (req, res) => {
    res.json({
        text: 'Test test Test',
    });
});

app.listen(PORT, () => {
    console.log('Server has been started...');
});
