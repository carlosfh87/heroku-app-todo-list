import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Importa el componente que vas a probar
import AddTaskForm from './components/AddTaskForm';
import ToDo from './components/ToDo';
import UpdateForm from './components/UpdateForm';

describe('App', () => {
  it('Renderiza los componentes sin error', () => {
    render(<App />);
    render(<AddTaskForm />);
    render(<ToDo />);
    render(<UpdateForm />);
  });

  it('Renderiza el título', () => {
    render(<App />);

    const titleElement = screen.getByTestId('title');
    expect(titleElement.textContent).toBe('App for manage To Do list');
  });

  it('Que contenga la tarea "Mi Primera Tarea"', () => {
    render(<App />);

    const listItemElement = screen.getByText('Mi Primera Tarea');
    expect(listItemElement).toBeDefined();
  });
});
