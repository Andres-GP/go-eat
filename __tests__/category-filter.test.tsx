import { render, screen, fireEvent } from "@testing-library/react";
import { CategoryFilter } from "@/components/category-filter";

describe("CategoryFilter", () => {
  const mockOnCategoryChange = jest.fn();

  beforeEach(() => {
    mockOnCategoryChange.mockClear();
  });

  it("renders all category chips", () => {
    render(
      <CategoryFilter
        selectedCategory="all"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    expect(screen.getByText(/All Recipes/i)).toBeInTheDocument();
    expect(screen.getByText(/Breakfast/i)).toBeInTheDocument();
    expect(screen.getByText(/Lunch/i)).toBeInTheDocument();
    expect(screen.getByText(/Dinner/i)).toBeInTheDocument();
    expect(screen.getByText(/Dessert/i)).toBeInTheDocument();
    expect(screen.getByText(/Appetizer/i)).toBeInTheDocument();
  });

  it("calls onCategoryChange when a chip is clicked", () => {
    render(
      <CategoryFilter
        selectedCategory="all"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    const breakfastChip = screen.getByText(/Breakfast/i);
    fireEvent.click(breakfastChip);

    expect(mockOnCategoryChange).toHaveBeenCalledWith("breakfast");
  });

  it("highlights the selected category", () => {
    const { rerender } = render(
      <CategoryFilter
        selectedCategory="dinner"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    const dinnerChip = screen.getByText(/Dinner/i).closest(".MuiChip-root");
    expect(dinnerChip).toHaveStyle({ backgroundColor: "#ff6b35" });

    rerender(
      <CategoryFilter
        selectedCategory="breakfast"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    const breakfastChip = screen
      .getByText(/Breakfast/i)
      .closest(".MuiChip-root");
    expect(breakfastChip).toHaveStyle({ backgroundColor: "#ff6b35" });
  });
});
