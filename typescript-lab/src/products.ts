import Product from "./models/product";

const Products: Product[] = [
    {
    name: "candle",
    price: 50
    },

    {
    name: "plugin",
    price: 20
    },

    {
    name: "spray",
    price: 10
    }];


    const calcAverageProductPrice = (array:Product[]): number => {
        let total = 0;
        array.forEach((item) => {
            total += item.price;
    
        })
        return total/array.length
    }