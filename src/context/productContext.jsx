import { createContext, useEffect, useState } from 'react';

const ProductContext = createContext({
    product: {
        name: '',
        price: '',
        quantity: 0,
        total: 0
    },
    setProduct: () => { },
    productList: [],
    setProductList: () => { }
});

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState({
        name: '',
        price: '$0', // Initialize price value
        quantity: 0,
        total: 0
    });
    const [productList, setProductList] = useState(localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : []);
    const [shelf, setShelf] = useState(JSON.parse(localStorage.getItem('shelf')) ? JSON.parse(localStorage.getItem('shelf')) : 3);
    const [productsOnShelf, setProductsOnShelf] = useState(localStorage.getItem('productsOnShelf') ? JSON.parse(localStorage.getItem('productsOnShelf')) : {});
    const [disabledRows, setDisabledRows] = useState(localStorage.getItem('disabledRows') ? JSON.parse(localStorage.getItem('disabledRows')) : {});


    const handleChange = (event) => {
        const { id, value } = event.target;
        setProduct((prevData) => {
            const updatedData = {
                ...prevData,
                [id]: id === 'price' ? '$' + value : value,
            };
            const price = parseFloat(Number(updatedData.price?.split('').slice(1).join(''))) || 0;
            if (id === 'price') {
                const newTotal = price * product?.quantity;
                updatedData.total = newTotal;
            } else if (id === 'quantity') {
                const quantity = parseInt(updatedData.quantity, 10) || 0;
                const newTotal = price * quantity;
                updatedData.total = newTotal;
            }
            return updatedData;
        });
    };


    const handleSubmit = () => {
        setProductList((prev) => {
            const updatedProductList = [...prev, product];
            localStorage.setItem('productList', JSON.stringify(updatedProductList));
            return updatedProductList;
        });

        setProduct({
            name: '',
            price: '',
            quantity: '',
            total: 0,
        });

    };

    return (
        <ProductContext.Provider value={{ product, productList, handleChange, handleSubmit, shelf, setShelf, setProductsOnShelf, productsOnShelf, disabledRows, setDisabledRows }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };