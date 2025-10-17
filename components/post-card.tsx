"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { AccessTime, Restaurant } from "@mui/icons-material";
import Link from "next/link";
import { PostCardProps } from "@/types";

export function PostCard({ post }: PostCardProps) {
  const categoryName = post.categories?.[0]?.name || "General";
  const image = post.featuredImage?.url || "/fallback.jpg";
  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <Link href={`/post/${post.slug}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1a1a1a",
          border: "1px solid #2a2a2a",
          borderRadius: 3,
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.25)",
            borderColor: "#ff6b35",
          },
          marginBottom: {
            xs: "30px",
            sm: 0,
          },
        }}
      >
        <Box sx={{ overflow: "hidden", position: "relative" }}>
          <CardMedia
            component="img"
            image={image}
            alt={post.title}
            className="card-image"
            sx={{
              height: "260px",
              objectFit: "cover",
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0.00001,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
          />
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Chip
              label={categoryName}
              size="small"
              sx={{
                backgroundColor: "#ff6b35",
                color: "#fff",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: "#b0b0b0", fontWeight: 500 }}
            >
              {date}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 700,
              color: "#f5f5f5",
              fontSize: "1.4rem",
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </Typography>
          {post.excerpt && (
            <Typography
              variant="body2"
              sx={{
                color: "#b0b0b0",
                flexGrow: 1,
                lineHeight: 1.7,
              }}
            >
              {post.excerpt}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              mt: "auto",
              pt: 2,
              borderTop: "1px solid #2a2a2a",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <AccessTime sx={{ fontSize: 20, color: "#ffa500" }} />
              <Typography
                variant="body2"
                sx={{ color: "#d0d0d0", fontWeight: 500 }}
              >
                {post.cookTime}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <Restaurant sx={{ fontSize: 20, color: "#ffa500" }} />
              <Typography
                variant="body2"
                sx={{ color: "#d0d0d0", fontWeight: 500 }}
              >
                {post.servings} servings
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
