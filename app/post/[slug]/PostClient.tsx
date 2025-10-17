"use client";

import { Container, Typography, Box, Chip, GridLegacy } from "@mui/material";
import {
  AccessTime,
  Restaurant,
  Person,
  TrendingUp,
} from "@mui/icons-material";
import { Navbar } from "@/components/navbar";
import { PostClientProps } from "@/types";
import InfoCard from "@/components/info-card";
import SectionCard from "@/components/section-card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const orderedListStyles = {
  lineHeight: 1.6,
  p: 0,
  m: 0,
  "& li": {
    color: "#d0d0d0",
    mb: 3,
    lineHeight: 1.8,
    "&::marker": {
      color: "#ffa500",
      fontWeight: 700,
    },
  },
};

export default function PostClient({ post }: PostClientProps) {
  const content =
    typeof post.content === "string"
      ? post.content
      : post.content?.raw?.children
          ?.map((node: any) => node.children?.[0]?.text)
          .join("\n") || "";

  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          height: { xs: "300px", md: "500px" },
          overflow: "hidden",
          mb: 6,
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, #0a0a0a, transparent)",
          },
        }}
      >
        <Box
          component="img"
          src={post.featuredImage?.url}
          alt={post.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Container
          maxWidth="md"
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            pb: 4,
          }}
        >
          <Chip
            label={post.categories?.[0]?.name || "General"}
            sx={{
              backgroundColor: "#ff6b35",
              color: "#fff",
              fontWeight: 700,
              textTransform: "uppercase",
              mb: 2,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              color: "#fff",
              fontSize: { xs: "2rem", md: "3.5rem" },
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mb: 8 }}>
        <GridLegacy container spacing={2} sx={{ mb: 6 }}>
          <InfoCard
            icon={<Person />}
            label="Chef"
            value={
              typeof post.author === "string" ? post.author : post.author?.name
            }
          />
          <InfoCard
            icon={<AccessTime />}
            label="Cook Time"
            value={post.cookTime}
          />
          <InfoCard
            icon={<Restaurant />}
            label="Servings"
            value={post.servings}
          />
          <InfoCard
            icon={<TrendingUp />}
            label="Difficulty"
            value={post.difficultly}
          />
        </GridLegacy>

        <GridLegacy container spacing={4} sx={{ mb: 6 }}>
          {post.excerpt && (
            <GridLegacy item xs={12} md={4}>
              <SectionCard title="Description">
                <Box component="ol" sx={orderedListStyles}>
                  {post.excerpt}
                </Box>
              </SectionCard>
            </GridLegacy>
          )}
          {content && (
            <GridLegacy item xs={12} md={8}>
              <SectionCard title="Instructions">
                <Box component="ol" sx={orderedListStyles}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </Box>
              </SectionCard>
            </GridLegacy>
          )}
        </GridLegacy>
      </Container>
    </>
  );
}
