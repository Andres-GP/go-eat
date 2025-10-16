import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { CommentSection } from "@/components/comment-section"

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
})

describe("CommentSection", () => {
  beforeEach(() => {
    localStorageMock.clear()
  })

  it("renders the comment form", () => {
    render(<CommentSection postId="1" />)

    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Your Comment/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Post Comment/i })).toBeInTheDocument()
  })

  it('displays "no comments" message when there are no comments', () => {
    render(<CommentSection postId="1" />)

    expect(screen.getByText(/No comments yet/i)).toBeInTheDocument()
  })

  it("allows users to submit a comment", async () => {
    render(<CommentSection postId="1" />)

    const nameInput = screen.getByLabelText(/Your Name/i)
    const commentInput = screen.getByLabelText(/Your Comment/i)
    const submitButton = screen.getByRole("button", { name: /Post Comment/i })

    fireEvent.change(nameInput, { target: { value: "John Doe" } })
    fireEvent.change(commentInput, { target: { value: "Great recipe!" } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Great recipe!")).toBeInTheDocument()
    })
  })

  it("saves comments to localStorage", async () => {
    render(<CommentSection postId="1" />)

    const nameInput = screen.getByLabelText(/Your Name/i)
    const commentInput = screen.getByLabelText(/Your Comment/i)
    const submitButton = screen.getByRole("button", { name: /Post Comment/i })

    fireEvent.change(nameInput, { target: { value: "Jane Smith" } })
    fireEvent.change(commentInput, { target: { value: "Delicious!" } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      const storedComments = localStorageMock.getItem("comments-1")
      expect(storedComments).toBeTruthy()
      const comments = JSON.parse(storedComments!)
      expect(comments).toHaveLength(1)
      expect(comments[0].author).toBe("Jane Smith")
      expect(comments[0].content).toBe("Delicious!")
    })
  })
})
