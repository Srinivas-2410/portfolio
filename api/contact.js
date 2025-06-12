import process from 'process';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

let Contact;

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ message: 'Contact saved!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save contact' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}