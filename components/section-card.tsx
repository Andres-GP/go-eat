"use client";

import { Typography, Paper, Divider } from "@mui/material";

import { SectionCardProps } from "@/types";

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <Paper
      sx={{
        p: 4,
        backgroundColor: "#1a1a1a",
        border: "2px solid #2a2a2a",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#ff6b35",
          fontWeight: 700,
          mb: 1,
          fontSize: "1.8rem",
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ mb: 3, borderColor: "#2a2a2a" }} />
      {children}
    </Paper>
  );
}
