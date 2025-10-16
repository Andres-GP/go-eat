import type React from "react"
import { render, screen } from "@testing-library/react"
import { Navbar } from "@/components/navbar"
import jest from "jest"

jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe("Navbar", () => {
  it("renders the logo and navigation links", () => {
    render(<Navbar />)

    expect(screen.getByText("Go Eat")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })

  it("has correct link hrefs", () => {
    render(<Navbar />)

    const homeLinks = screen.getAllByRole("link", { name: /home/i })
    expect(homeLinks[0]).toHaveAttribute("href", "/")

    const contactLinks = screen.getAllByRole("link", { name: /contact/i })
    expect(contactLinks[0]).toHaveAttribute("href", "/contact")
  })
})
