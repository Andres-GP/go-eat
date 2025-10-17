"use client";

import { Typography, Paper, GridLegacy } from "@mui/material";

import { InfoCardProps } from "@/types";

export default function InfoCard({ icon, label, value }: InfoCardProps) {
  const Icon = icon.type;
  return (
    <GridLegacy item xs={6} sm={3}>
      <Paper
        sx={{
          p: 2,
          textAlign: "center",
          backgroundColor: "#1a1a1a",
          border: "1px solid #2a2a2a",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "#ff6b35",
            transform: "translateY(-4px)",
          },
        }}
      >
        <Icon sx={{ color: "#ffa500", fontSize: 32, mb: 1 }} />
        <Typography
          variant="caption"
          sx={{ color: "#b0b0b0", display: "block", mb: 0.5 }}
        >
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: "#f5f5f5", fontWeight: 600 }}>
          {value || "—"}
        </Typography>
      </Paper>
    </GridLegacy>
  );
}
