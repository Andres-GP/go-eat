"use client";

import { Box, Chip } from "@mui/material";
import { CategoryFilterProps } from "@/types";

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  categories,
}: CategoryFilterProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        mb: 6,
        p: 3,
        backgroundColor: "#1a1a1a",
        borderRadius: 3,
        border: "1px solid #2a2a2a",
      }}
    >
      {categories.map((category) => (
        <Chip
          key={category.slug}
          label={category.name}
          onClick={() => onCategoryChange(category.slug)}
          sx={{
            backgroundColor:
              selectedCategory === category.slug ? "#ff6b35" : "transparent",
            color: selectedCategory === category.slug ? "#fff" : "#d0d0d0",
            fontWeight: 600,
            fontSize: "1rem",
            padding: "24px 12px",
            border:
              selectedCategory === category.slug
                ? "2px solid #ff6b35"
                : "2px solid #2a2a2a",
            borderRadius: 2,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            "&:hover": {
              backgroundColor:
                selectedCategory === category.slug ? "#e55a2b" : "#2a2a2a",
              transform: "translateY(-4px)",
              boxShadow:
                selectedCategory === category.slug
                  ? "0 8px 20px rgba(255, 107, 53, 0.3)"
                  : "0 4px 12px rgba(0,0,0,0.3)",
              borderColor:
                selectedCategory === category.slug ? "#ff6b35" : "#3a3a3a",
            },
          }}
        />
      ))}
    </Box>
  );
}
