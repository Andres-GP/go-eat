"use client"

import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material"
import Link from "next/link"
import { Restaurant } from "@mui/icons-material"

export function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #2a2a2a",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Restaurant sx={{ color: "#ff6b35", fontSize: 36 }} />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #ff6b35 0%, #ffa500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Go Eat
              </Typography>
            </Box>
          </Link>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "#f5f5f5",
                  fontWeight: 600,
                  px: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2a2a2a",
                    color: "#ff6b35",
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/contact" passHref style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "#f5f5f5",
                  fontWeight: 600,
                  px: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2a2a2a",
                    color: "#ff6b35",
                  },
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
