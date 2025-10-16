"use client";

import { useState } from "react";
import { Container, Typography, Box, GridLegacy } from "@mui/material";
import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { CategoryFilter } from "@/components/category-filter";
import { posts } from "@/lib/mock-data";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
          py: { xs: 8, md: 12 },
          mb: 8,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 165, 0, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 800,
              background:
                "linear-gradient(135deg, #ff6b35 0%, #ffa500 50%, #ffcc00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              textShadow: "0 0 80px rgba(255, 107, 53, 0.3)",
            }}
          >
            Go Eat
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "#d0d0d0",
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              lineHeight: 1.6,
            }}
          >
            Discover delicious recipes and culinary inspiration from around the
            world
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, #ff6b35, #ffa500)",
              mx: "auto",
              mt: 4,
              borderRadius: "2px",
            }}
          />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <GridLegacy
          container
          spacing={{ xs: 0, sm: 3, md: 3 }}
          sx={{
            width: "100%",
            margin: 0,
            pl: 0,
            pr: 0,
          }}
        >
          {filteredPosts.map((post) => (
            <GridLegacy item key={post.id} xs={12} sm={6} md={3}>
              <PostCard post={post} />
            </GridLegacy>
          ))}
        </GridLegacy>

        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h5" sx={{ color: "#b0b0b0" }}>
              No recipes found in this category
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
}
