import { render, screen, fireEvent } from "@testing-library/react";
import { CategoryFilter } from "@/components/category-filter";

describe("CategoryFilter", () => {
  const mockOnCategoryChange = jest.fn();

  const categories = [
    { slug: "all", name: "All Recipes" },
    { slug: "breakfast", name: "Breakfast" },
    { slug: "lunch", name: "Lunch" },
    { slug: "dinner", name: "Dinner" },
    { slug: "dessert", name: "Dessert" },
    { slug: "appetizer", name: "Appetizer" },
  ];

  beforeEach(() => {
    mockOnCategoryChange.mockClear();
  });

  it("renders all category chips", () => {
    render(
      <CategoryFilter
        selectedCategory="all"
        onCategoryChange={mockOnCategoryChange}
        categories={categories}
      />
    );

    categories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  it("calls onCategoryChange when a chip is clicked", () => {
    render(
      <CategoryFilter
        selectedCategory="all"
        onCategoryChange={mockOnCategoryChange}
        categories={categories}
      />
    );

    const breakfastChip = screen.getByText("Breakfast");
    fireEvent.click(breakfastChip);

    expect(mockOnCategoryChange).toHaveBeenCalledWith("breakfast");
  });

  it("highlights the selected category", () => {
    const { rerender } = render(
      <CategoryFilter
        selectedCategory="dinner"
        onCategoryChange={mockOnCategoryChange}
        categories={categories}
      />
    );

    const dinnerChip = screen.getByText("Dinner").closest(".MuiChip-root");
    expect(dinnerChip).toHaveStyle({ backgroundColor: "#ff6b35" });

    rerender(
      <CategoryFilter
        selectedCategory="breakfast"
        onCategoryChange={mockOnCategoryChange}
        categories={categories}
      />
    );

    const breakfastChip = screen
      .getByText("Breakfast")
      .closest(".MuiChip-root");
    expect(breakfastChip).toHaveStyle({ backgroundColor: "#ff6b35" });
  });
});
