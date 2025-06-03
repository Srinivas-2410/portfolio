import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Alert,
  Snackbar 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setToast({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });
        setFields({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      setToast({
        open: true,
        message: 'Failed to send message',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg backdrop-blur-sm bg-white/50 shadow-xl">
        <CardContent className="p-6">
          <Typography variant="h4" className="text-center font-bold mb-6">
            Contact Me
          </Typography>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              fullWidth
              label="Name"
              value={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
              required
              variant="outlined"
            />
            
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
              required
              variant="outlined"
            />
            
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              value={fields.message}
              onChange={(e) => setFields({ ...fields, message: e.target.value })}
              required
              variant="outlined"
            />
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              endIcon={<SendIcon />}
              className="mt-4"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Snackbar 
        open={toast.open} 
        autoHideDuration={6000} 
        onClose={() => setToast({ ...toast, open: false })}
      >
        <Alert severity={toast.severity} variant="filled">
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

