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
        text: 'Test JSON',
    });
});

app.listen(PORT);
