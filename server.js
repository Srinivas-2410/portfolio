import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your MongoDB Atlas connection string
mongoose.connect('mongodb+srv://srinivasshivakumar24:X462Qlaa3aH1E8vk@portfolio.wkw5faj.mongodb.net/?retryWrites=true&w=majority&appName=portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));