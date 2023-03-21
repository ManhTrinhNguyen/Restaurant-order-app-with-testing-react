import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Cart from "./Cart"


test("test Cart Component", () => {
  render(<Cart />);
  const checkCart = screen.getByText("Cart")
  expect(checkCart).toBeInTheDocument()
})