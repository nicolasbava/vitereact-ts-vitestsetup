// src/App.test.tsx
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para matchers adicionales
import App from './App';
import { describe, it, expect, beforeEach } from 'vitest';

describe('<App />', () => {
  beforeEach(() => {
    // Configuración que se ejecuta antes de cada prueba, si es necesario
  });

  it('Should render a list of products and a button to order them', () => {
    render(<App />);

    // Buscar todos los elementos con el rol 'listitem'
    const products = screen.getAllByRole('listitem');
    expect(products).toHaveLength(3);

    // Buscar el botón en el componente
    const button = screen.getByRole('button');

    // Comprobar que el botón está en el documento
    expect(button).toBeInTheDocument();
  });

  it('Should order products by price when the button is clicked', async () => {
    render(<App />);
    const button = screen.getByRole('button', {name: 'btnOrder'});

    // Simular el clic en el botón
    fireEvent.click(button);

    // Esperar a que se actualice la lista de productos
    await waitFor(() => {
      const products = screen.getAllByRole('listitem');

      expect(products[0]).toHaveTextContent('Cachopo');
      expect(products[1]).toHaveTextContent('Jujuy');
      expect(products[2]).toHaveTextContent('Chorizo a la sidra');
    });
  });
});
