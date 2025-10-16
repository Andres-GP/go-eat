"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Box, Typography, TextField, Button, Paper, Avatar } from "@mui/material"
import { Send } from "@mui/icons-material"

interface Comment {
  id: string
  postId: string
  author: string
  content: string
  date: string
}

interface CommentSectionProps {
  postId: string
}

export function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${postId}`)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [postId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!author.trim() || !content.trim()) return

    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      author: author.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
    }

    const updatedComments = [...comments, newComment]
    setComments(updatedComments)
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments))

    setAuthor("")
    setContent("")
  }

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "#f5f5f5" }}>
        Comments ({comments.length})
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 3,
          mb: 4,
          backgroundColor: "#1a1a1a",
          border: "1px solid #2a2a2a",
        }}
      >
        <TextField
          fullWidth
          label="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Your Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={4}
          sx={{ mb: 2 }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<Send />}
          sx={{
            backgroundColor: "#ff6b35",
            "&:hover": {
              backgroundColor: "#e55a2b",
            },
          }}
        >
          Post Comment
        </Button>
      </Paper>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {comments.map((comment) => (
          <Paper
            key={comment.id}
            sx={{
              p: 3,
              backgroundColor: "#1a1a1a",
              border: "1px solid #2a2a2a",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Avatar sx={{ backgroundColor: "#ff6b35" }}>{comment.author.charAt(0).toUpperCase()}</Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#f5f5f5" }}>
                  {comment.author}
                </Typography>
                <Typography variant="caption" sx={{ color: "#b0b0b0" }}>
                  {new Date(comment.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ color: "#f5f5f5", lineHeight: 1.6 }}>
              {comment.content}
            </Typography>
          </Paper>
        ))}
      </Box>

      {comments.length === 0 && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="body1" sx={{ color: "#b0b0b0" }}>
            No comments yet. Be the first to comment!
          </Typography>
        </Box>
      )}
    </Box>
  )
}
