import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import CardDetails from "./CardDetails"



describe("input card infomation", () => {
  test("input UserName", () => {
    render(<CardDetails />)
    const nameInputEl = screen.getByPlaceholderText(/enter your name/i)
    expect(nameInputEl).toBeInTheDocument()
  })
  test("input Card Number", () => {
    render(<CardDetails />)
    const cardInputEl = screen.getByPlaceholderText(/enter card number/i)
    expect(cardInputEl).toBeInTheDocument()
  })

  test("input Card CVV", () => {
    render(<CardDetails />)
    const cardCVV = screen.getByPlaceholderText(/enter cvv/i)
    expect(cardCVV).toBeInTheDocument()
  })

  test("pay Btn", () => {
    render(<CardDetails />)
    const payBtn= screen.getByRole("button")
    expect(payBtn).toBeInTheDocument()
  })
})

describe("Infomation should be empty", () => {
  test("Enter Name should be empty", () => {
    render(<CardDetails />)
    const enterNameInput = screen.getByPlaceholderText(/enter your name/i)
    expect(enterNameInput.value).toBe("")
  })
  test("Enter Card Number should be empty", () => {
    render(<CardDetails />)
    const enterCardInput = screen.getByPlaceholderText(/enter card number/i)
    expect(enterCardInput.value).toBe("")
  })
  test("Enter CVV should be empty", () => {
    render(<CardDetails />)
    const enterCVV = screen.getByPlaceholderText(/enter cvv/i)
    expect(enterCVV.value).toBe("")
  })
  test("pay Btn should be disable", () => {
    render(<CardDetails />)
    const payBtn = screen.getByRole("button")
    expect(payBtn).toBeDisabled()
  })
})


describe("Infomation input should Change", () => {
  test("Enter Name input should change", () => {
    render(<CardDetails />)
    const enterNameInput = screen.getByPlaceholderText(/enter your name/i)

    const testValue = "test"

    fireEvent.change(enterNameInput, { target: { value: testValue } })
    expect(enterNameInput.value).toBe(testValue)
  })

  test("Enter Card Number should change", () => {
    render(<CardDetails />)
    const enterCardInput = screen.getByPlaceholderText(/enter card number/i)
    const testValue = "number"
    fireEvent.change(enterCardInput, {target: {value : testValue}})
    expect(enterCardInput.value).toBe(testValue) 
  })

  test("Enter CVV should change", () => {
    render(<CardDetails />)
    const enterCVV = screen.getByPlaceholderText(/enter cvv/i)
    const testValue = "cvv"
    fireEvent.change(enterCVV, {target: {value : testValue}})
    expect(enterCVV.value).toBe(testValue) 
  })

  test("pay Btn should Not be disable when input exist", () => {
    render(<CardDetails />)
    const payBtn = screen.getByRole("button")

    const enterNameInput = screen.getByPlaceholderText(/enter your name/i)
    const enterCardInput = screen.getByPlaceholderText(/enter card number/i)
    const enterCVV = screen.getByPlaceholderText(/enter cvv/i)

    const testValue = "test"

    fireEvent.change(enterNameInput, { target: { value: testValue } })
    fireEvent.change(enterCardInput, {target: {value : testValue}})
    fireEvent.change(enterCVV, {target: {value : testValue}})

    expect(payBtn).not.toBeDisabled()
  })
})
