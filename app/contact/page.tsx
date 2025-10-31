'use client';

import type React from 'react';

import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import { Send, Email, Phone, LocationOn } from '@mui/icons-material';
import { Navbar } from '@/components/navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
            color: '#f5f5f5',
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: '#b0b0b0',
            mb: 6,
          }}
        >
          Have a question or want to share your recipe? We&apos;d love to hear from you!
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
          <Paper
            sx={{
              flex: 1,
              p: 3,
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Email sx={{ color: '#ff6b35', fontSize: 32 }} />
            <Box>
              <Typography variant="subtitle2" sx={{ color: '#b0b0b0', mb: 0.5 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ color: '#f5f5f5', fontWeight: 600 }}>
                hello@goeat.com
              </Typography>
            </Box>
          </Paper>

          <Paper
            sx={{
              flex: 1,
              p: 3,
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Phone sx={{ color: '#ff6b35', fontSize: 32 }} />
            <Box>
              <Typography variant="subtitle2" sx={{ color: '#b0b0b0', mb: 0.5 }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ color: '#f5f5f5', fontWeight: 600 }}>
                +1 (555) 123-4567
              </Typography>
            </Box>
          </Paper>

          <Paper
            sx={{
              flex: 1,
              p: 3,
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <LocationOn sx={{ color: '#ff6b35', fontSize: 32 }} />
            <Box>
              <Typography variant="subtitle2" sx={{ color: '#b0b0b0', mb: 0.5 }}>
                Location
              </Typography>
              <Typography variant="body1" sx={{ color: '#f5f5f5', fontWeight: 600 }}>
                San Francisco, CA
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
          }}
        >
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
          />
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={6}
            sx={{ mb: 3 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<Send />}
            disabled={submitted}
            sx={{
              backgroundColor: '#ff6b35',
              '&:hover': {
                backgroundColor: '#e55a2b',
              },
              '&:disabled': {
                backgroundColor: '#2a2a2a',
                color: '#b0b0b0',
              },
            }}
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </Button>
        </Paper>
      </Container>
    </>
  );
}
