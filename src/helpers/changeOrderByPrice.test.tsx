import { ProductType } from "types/ProductType";
import { changeOrderByPrice } from "./changeOrderByPrice";

const productList: Array<ProductType> = [
    { id: 3, name: 'Chorizo a la sidra', price: 25},
    {
      id: 2,
      name: 'Jujuy',
      price: 32,
    },
    { id: 1, name: 'Cachopo', price: 35 }
  ]

describe("changeOrderByPrice", () => {
    it('Should order all products by price in descending order', () => {
        const result = changeOrderByPrice(productList);

        const cheaperProduct = {
            id: 3, name:'Chorizo a la sidra', price: 25
        }

        const expensiveProduct = {
            id: 1, name: 'Cachopo', price: 35
        }

        const middleProduct = { id: 2, name: 'Jujuy', price: 32 };
        expect(result[0]).toEqual(expensiveProduct);
        expect(result[1]).toEqual(middleProduct);   // Check middle price
        expect(result[2]).toEqual(cheaperProduct)
    } )
})