import { Container, Typography, Box, Chip, Paper, Divider, Grid } from "@mui/material"
import { AccessTime, Restaurant, Person, TrendingUp } from "@mui/icons-material"
import { Navbar } from "@/components/navbar"
import { CommentSection } from "@/components/comment-section"
import { posts } from "@/lib/mock-data"
import { notFound } from "next/navigation"

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const sections = post.content.split("\n## ").filter((s) => s.trim())
  const title = sections[0].replace(/^#\s+/, "").trim()
  const ingredientsSection = sections.find((s) => s.startsWith("Ingredients"))
  const instructionsSection = sections.find((s) => s.startsWith("Instructions"))

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
          src={post.image}
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
            label={post.category}
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
        <Grid container spacing={2} sx={{ mb: 6 }}>
          <Grid item xs={6} sm={3}>
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
              <Person sx={{ color: "#ffa500", fontSize: 32, mb: 1 }} />
              <Typography variant="caption" sx={{ color: "#b0b0b0", display: "block", mb: 0.5 }}>
                Chef
              </Typography>
              <Typography variant="body2" sx={{ color: "#f5f5f5", fontWeight: 600 }}>
                {post.author}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
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
              <AccessTime sx={{ color: "#ffa500", fontSize: 32, mb: 1 }} />
              <Typography variant="caption" sx={{ color: "#b0b0b0", display: "block", mb: 0.5 }}>
                Cook Time
              </Typography>
              <Typography variant="body2" sx={{ color: "#f5f5f5", fontWeight: 600 }}>
                {post.cookTime}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
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
              <Restaurant sx={{ color: "#ffa500", fontSize: 32, mb: 1 }} />
              <Typography variant="caption" sx={{ color: "#b0b0b0", display: "block", mb: 0.5 }}>
                Servings
              </Typography>
              <Typography variant="body2" sx={{ color: "#f5f5f5", fontWeight: 600 }}>
                {post.servings}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
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
              <TrendingUp sx={{ color: "#ffa500", fontSize: 32, mb: 1 }} />
              <Typography variant="caption" sx={{ color: "#b0b0b0", display: "block", mb: 0.5 }}>
                Difficulty
              </Typography>
              <Typography variant="body2" sx={{ color: "#f5f5f5", fontWeight: 600 }}>
                {post.difficulty}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {ingredientsSection && (
            <Grid item xs={12} md={5}>
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
                    mb: 3,
                    fontSize: "1.8rem",
                  }}
                >
                  Ingredients
                </Typography>
                <Divider sx={{ mb: 3, borderColor: "#2a2a2a" }} />
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    p: 0,
                    m: 0,
                    "& li": {
                      color: "#d0d0d0",
                      mb: 2,
                      pl: 3,
                      position: "relative",
                      lineHeight: 1.8,
                      "&::before": {
                        content: '"✓"',
                        position: "absolute",
                        left: 0,
                        color: "#ffa500",
                        fontWeight: 700,
                      },
                    },
                  }}
                >
                  {ingredientsSection
                    .split("\n")
                    .filter((line) => line.trim().startsWith("-"))
                    .map((ingredient, idx) => (
                      <li key={idx}>{ingredient.replace(/^-\s*/, "")}</li>
                    ))}
                </Box>
              </Paper>
            </Grid>
          )}

          {instructionsSection && (
            <Grid item xs={12} md={7}>
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
                    mb: 3,
                    fontSize: "1.8rem",
                  }}
                >
                  Instructions
                </Typography>
                <Divider sx={{ mb: 3, borderColor: "#2a2a2a" }} />
                <Box
                  component="ol"
                  sx={{
                    p: 0,
                    m: 0,
                    pl: 3,
                    "& li": {
                      color: "#d0d0d0",
                      mb: 3,
                      lineHeight: 1.8,
                      "&::marker": {
                        color: "#ffa500",
                        fontWeight: 700,
                      },
                    },
                  }}
                >
                  {instructionsSection
                    .split("\n")
                    .filter((line) => /^\d+\./.test(line.trim()))
                    .map((instruction, idx) => (
                      <li key={idx}>{instruction.replace(/^\d+\.\s*/, "")}</li>
                    ))}
                </Box>
              </Paper>
            </Grid>
          )}
        </Grid>

        <CommentSection postId={post.id} />
      </Container>
    </>
  )
}
