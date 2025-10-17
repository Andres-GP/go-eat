import type React from "react";
import { render, screen } from "@testing-library/react";
import { PostCard } from "@/components/post-card";
import type { Post } from "@/types";
import { jest } from "@jest/globals";

jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

const mockPost: Post = {
  id: "1",
  title: "Test Recipe",
  slug: "test-recipe",
  excerpt: "This is a test recipe",
  content: "Full content here",
  featuredImage: { url: "/test.jpg" },
  categories: [{ name: "Dessert", slug: "dessert" }],
  author: "Test Chef",
  cookTime: "30 mins",
  servings: 4,
  difficultly: "Easy",
};

describe("PostCard", () => {
  it("renders post information correctly", () => {
    render(<PostCard post={mockPost} />);

    expect(screen.getByText("Test Recipe")).toBeInTheDocument();
    expect(screen.getByText("This is a test recipe")).toBeInTheDocument();
    expect(screen.getByText("30 mins")).toBeInTheDocument();
    expect(screen.getByText("4 servings")).toBeInTheDocument();
  });

  it("links to the correct post page", () => {
    render(<PostCard post={mockPost} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/post/test-recipe");
  });

  it("displays the post image", () => {
    render(<PostCard post={mockPost} />);

    const image = screen.getByAltText("Test Recipe");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test.jpg");
  });
});
