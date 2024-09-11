import { ProductType } from "types/ProductType";

export const changeOrderByPrice = (products : Array<ProductType>) => {
    const sortedProducts = [...products].sort((a,b) => b.price - a.price);
    return sortedProducts
}