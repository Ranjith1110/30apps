import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());


let quotes = [];
let id = 1;


// Test Api (Get, Post, Put, Delete) => CRUD Operations
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Get all quotes
app.get('/api/quotes', (req, res) => {
    res.json(quotes);
})

// POST a new quote
app.post('/api/quotes', (req, res) => {
    const { text } = req.body;
   const newQuote = { id: id++, text };
   quotes.push(newQuote);
   res.status(201).json(newQuote); 
});

// PUT update a quote
app.put('/api/quotes/:id', (req, res) => {
    const quoteId = parseInt(req.params.id);
    const { text } = req.body;
    const quote = quotes.find(q => q.id === quoteId);
    if (quote) {
        quote.text = text;
        res.json(quote);
    } else {
        res.status(404).json({ message: 'Quote not found' });
    }
});

// DELETE a quote
app.delete('/api/quotes/:id', (req, res) => {
    const quoteId = parseInt(req.params.id);
    quotes = quotes.filter(q => q.id !== quoteId);
    res.status(204).end();
});

app.listen (PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
