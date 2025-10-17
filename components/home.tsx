"use client";

import React, { useState, useEffect } from "react";
import { Container, Typography, Box, GridLegacy } from "@mui/material";
import { Navbar } from "@/components/navbar";
import { PostCard } from "@/components/post-card";
import { CategoryFilter } from "@/components/category-filter";
import { Category, Post } from "@/types";
export default function HomePage({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const sortCategories = (arr: typeof categories) => {
    return arr.slice().sort((a, b) => {
      const cleanA = a.name.replace(/^[^\p{L}]*/u, "");
      const cleanB = b.name.replace(/^[^\p{L}]*/u, "");
      return cleanA.localeCompare(cleanB);
    });
  };

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) =>
          post.categories?.some(
            (cat) => cat?.slug?.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

  console.log(
    filteredPosts,
    "filteredPostsfilteredPostsfilteredPostsfilteredPostsfilteredPostsfilteredPostsfilteredPosts"
  );
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
            inset: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 165, 0, 0.1) 0%, transparent 50%)",
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 800,
              background:
                "linear-gradient(135deg, #ff6b35 0%, #ffa500 50%, #ffcc00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Go Eat
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "#d0d0d0",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Discover delicious recipes and culinary inspiration from around the
            world
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={(category: string) => setSelectedCategory(category)}
          categories={sortCategories(categories)}
        />

        <GridLegacy container spacing={{ xs: 0, sm: 3, md: 3 }}>
          {filteredPosts.map((post) => (
            <GridLegacy item key={post.slug} xs={12} sm={6} md={3}>
              <PostCard post={post} />
            </GridLegacy>
          ))}
        </GridLegacy>
      </Container>
    </>
  );
}
