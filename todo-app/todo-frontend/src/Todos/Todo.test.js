import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from './Todo';

describe('Todo Component', () => {
  const mockCompleteTodo = jest.fn();
  const mockDeleteTodo = jest.fn();
  const todo = { id: 1, text: 'Test Todo', done: false };

  beforeEach(() => {
    render(<Todo todo={todo} completeTodo={mockCompleteTodo} deleteTodo={mockDeleteTodo} />);
  });

  it('renders the todo text', () => {
    const todoElement = screen.getByText('Test Todo');
    expect(todoElement).toBeInTheDocument();
  });

  it('calls completeTodo when the "Set as done" button is clicked', () => {
    const button = screen.getByText('Set as done');
    fireEvent.click(button);
    expect(mockCompleteTodo).toHaveBeenCalledWith(todo);
  });

  it('calls deleteTodo when the "Delete" button is clicked', () => {
    const button = screen.getByText('Delete');
    fireEvent.click(button);
    expect(mockDeleteTodo).toHaveBeenCalledWith(todo);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
});
