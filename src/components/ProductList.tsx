import React from 'react';  
import { ProductType } from 'types/ProductType';

type ProductListProps = {initialProducts: ProductType[]}

const ProductList : React.FC<ProductListProps> = ({initialProducts}) => {
    return (
        <>
            <p>Lista de productos:</p>
            <ul>
                {initialProducts.map((ele : ProductType) => {
                    return (
                        <li key={ele.id} value={ele.name}>{ele.name} : {ele.price}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default ProductList;