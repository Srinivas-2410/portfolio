import { useState } from 'react';
import { 
  Box,
  Container,
  TextField, 
  Button, 
  Typography, 
  Alert,
  Snackbar,
  Fade,
  useTheme
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [focused, setFocused] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const theme = useTheme();

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
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 6, md: 12 },
          gap: 6
        }}
      >
        <Typography
          variant="h2"
          className="text-center font-bold"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
              : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: { xs: 4, md: 6 }
          }}
        >
          Contact Me
        </Typography>

        <Fade in timeout={1000}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: 'sm',
              mx: 'auto',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)'}`,
            }}
          >
            <TextField
              fullWidth
              label="Name"
              value={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
              required
              variant="outlined"
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'transform 0.2s ease-in-out',
                  transform: focused === 'name' ? 'scale(1.02)' : 'scale(1)',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.23)'
                      : 'rgba(0, 0, 0, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? '#93c5fd'
                      : '#6366f1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? '#93c5fd'
                      : '#6366f1',
                  }
                }
              }}
            />
            
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
              required
              variant="outlined"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'transform 0.2s ease-in-out',
                  transform: focused === 'email' ? 'scale(1.02)' : 'scale(1)',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.23)'
                      : 'rgba(0, 0, 0, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? '#93c5fd'
                      : '#6366f1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? '#93c5fd'
                      : '#6366f1',
                  }
                }
              }}
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
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  transition: 'transform 0.2s ease-in-out',
                  transform: focused === 'message' ? 'scale(1.02)' : 'scale(1)',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.23)'
                      : 'rgba(0, 0, 0, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? '#93c5fd'
                      : '#6366f1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.mode === 'dark'
                      ? '#93c5fd'
                      : '#6366f1',
                  }
                }
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              endIcon={<SendIcon />}
              sx={{
                py: 1.5,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
                  : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #a5b4fc 0%, #93c5fd 100%)'
                    : 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </Fade>
      </Box>

      <Snackbar 
        open={toast.open} 
        autoHideDuration={6000} 
        onClose={() => setToast({ ...toast, open: false })}
      >
        <Alert 
          severity={toast.severity} 
          variant="filled"
          sx={{
            backgroundColor: toast.severity === 'success' 
              ? '#10B981' 
              : '#EF4444'
          }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

