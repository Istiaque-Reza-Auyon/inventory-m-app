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
        price: '',
        quantity: 0,
        total: 0
    });
    const [productList, setProductList] = useState(localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : []);
    const [shelf, setShelf] = useState(JSON.parse(localStorage.getItem('shelf'))? JSON.parse(localStorage.getItem('shelf')) : 3);
    const [productsOnShelf, setProductsOnShelf] = useState(localStorage.getItem('productsOnShelf')? JSON.parse(localStorage.getItem('productsOnShelf')) : {});
    const [disabledRows, setDisabledRows] = useState(new Set());


    const handleChange = (event) => {
        const { id, value } = event.target;
        setProduct((prevData) => {
            const updatedData = {
                ...prevData,
                [id]: value,
            };
            
            // Recalculate total if price or quantity is updated
            if (id === 'price' || id === 'quantity') {
                const newTotal = updatedData.price * updatedData.quantity;
                updatedData.total = newTotal;
            }
            return updatedData;
        });
    };


    const handleSubmit = () => {
        console.log(product)
        setProductList((prev) => {
            const updatedProductList = [...prev, product];
            localStorage.setItem('productList', JSON.stringify(updatedProductList));
            return updatedProductList; 
        });
        
    };

    return (
        <ProductContext.Provider value={{ product, productList, handleChange, handleSubmit, shelf, setShelf, setProductsOnShelf, productsOnShelf, disabledRows, setDisabledRows }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };