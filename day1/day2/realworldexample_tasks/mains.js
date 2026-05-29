//task 10
import { API_URL } from "./config.js";

import { formatPrice } from "./utils.js";

import { Product } from "./product.js";



const fetchProducts = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                {
                    name: "Keyboard",
                    price: 2500
                },

                {
                    name: "Mouse",
                    price: 1200
                }
            ]);

        }, 1000);

    });

};



const loadProducts = async () => {

    try {

        console.log(`Fetching from ${API_URL}`);

        const products = await fetchProducts();

        products.forEach((item) => {

            const product = new Product(
                item.name,
                formatPrice(item.price)
            );

            console.log(product.getDetails());

        });

    }

    catch (error) {

        console.log(`Error: ${error}`);

    }

};

loadProducts();