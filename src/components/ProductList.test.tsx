// src/components/ProductList.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Vitest es compatible con jest-dom
import ProductList from './ProductList';
import { ProductType } from 'types/ProductType';

describe('<ProductList />', () => {
    it('Should render a list of products', () => {
        const productList: Array<ProductType> = [
            { id: 3, name: 'Chorizo a la sidra', price: 25 },
            { id: 2, name: 'Jujuy', price: 32 },
            { id: 1, name: 'Cachopo', price: 35 }
        ];

        render(<ProductList initialProducts={productList} />);

        const products = screen.getAllByRole('listitem');
        expect(products).toHaveLength(3);
    });
});
