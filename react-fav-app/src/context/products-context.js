import React, { useState } from 'react';

export const ProductsContext = React.createContext({
    products: [],
    togFav: (id) => { }
});

export default props => {
    const [productsList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]);

    const toggleFavourites = (productId) => {
        setProductsList(currentState => {
            const prodIndex = currentState.findIndex(
                p => p.id === productId
            );
            const newFavStatus = !currentState[prodIndex].isFavorite;
            const updatedProducts = [...currentState];
            updatedProducts[prodIndex] = {
                ...currentState[prodIndex],
                isFavorite: newFavStatus
            };
            return updatedProducts;
        });
    };
    return (
        <ProductsContext.Provider value={{ products: productsList, togFav: toggleFavourites }}>
            {props.children}
        </ProductsContext.Provider>
    );
};