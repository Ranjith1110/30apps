import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Define the schema model
const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
}, { timestamps: true })

const Quote = mongoose.model("Quote", quoteSchema);


// GET Method for (Fetching all Quotes)
app.get("/api/quotes", async (req, res) => {

    try {
        const quotes = await Quote.find().sort({ createdAt: -1 });
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch quotes" })
    }
})


// POST Method for (Creating or Posting a Quote)
app.post("/api/quotes", async (req, res) => {

    try {
        const { text } = req.body;

        if (!text || !text.trim()) {
            return res.status(400).json({ error: "Quote text is required" })
        }
        const created = await Quote.create({ text: text.trim() })
        res.status(201).json(created)
    } catch (err) {
        res.status(500).json({ error: "Failed to create quote" })
    }
})

// PUT Method for (Updating a Quote)
app.put("/api/quotes/:id", async (req, res) => {

    try {

        console.log(req.params);

        const { id } = req.params;
        const { text } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid quote ID" });
        }

        if (!text || !text.trim()) {
            return res.status(400).json({ error: "Text is required" });
        }

        const updated = await Quote.findByIdAndUpdate(
            id,
            { text: text.trim() },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Quote not found" });
        }

        res.json(updated);

    } catch (err) {
        res.status(500).json({ error: "Failed to create Quote" });
    }
})

// DELETE Method for (Delete a quote)
app.delete("/api/quotes/:id", async (req, res) => {

    try {
        console.log(req.params);

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid quote ID" });
        }

        const deleted = await Quote.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ error: "Quote not found" });
        }

        res.status(204).end();

    } catch (err) {
        res.status(500).json({ error: "Failed to create Quote" });
    }

})

// Test API
app.get("/", (req, res) => {
    res.send("Hey Guys I am learning MongoDB with NodeJS");
})

// Connect this to your MongoDB database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");

    }).catch((err) => {
        console.error(`Error connecting to MongoDB : ${err.message}`);
        process.exit(1);
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});