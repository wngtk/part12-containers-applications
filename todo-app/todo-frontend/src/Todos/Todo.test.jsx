import { render, screen } from "@testing-library/react"
import Todo from "./Todo"
import { expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"

// for exercise 12.14
test('render todo', async () => {
  const todo = {
    text: "Write Rust code",
    done: false,
  }

  const mockDeleteHandler = vi.fn()
  const mockCompleteHandler = vi.fn()

  render(<Todo todo={todo} deleteTodo={mockDeleteHandler} completeTodo={mockCompleteHandler} />)
  const user = userEvent.setup()
  const element = screen.getByText('Write Rust code')
  expect(element).toBeDefined()

  const completeTodo = screen.getByText('Set as done')
  await user.click(completeTodo)
  expect(mockCompleteHandler.mock.calls).toHaveLength(1)
  const deleteTodo = screen.getByText('Delete')
  await user.click(deleteTodo)
  expect(mockDeleteHandler.mock.calls).toHaveLength(1)
})
