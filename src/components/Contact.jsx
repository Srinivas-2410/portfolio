import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  Box
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ type: "", message: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }
    if (!emailRe.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message' });
    }
  }

  return (
    <section id="contact" className="mb-20">
      <Typography variant="h4" fontWeight="bold" mb={2}>Contact</Typography>
      <Card elevation={3} sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
            Contact Me
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            
            {status.message && (
              <Alert severity={status.type} sx={{ mt: 2 }}>
                {status.message}
              </Alert>
            )}
            
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              sx={{ mt: 3 }}
            >
              Send Message
            </Button>
          </Box>
        </CardContent>
      </Card>
    </section>
  );
}