
export const addItemToCart = (cartItems, carItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem =>
        (cartItem.id === carItemToAdd.id));

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === carItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...carItemToAdd, quantity: 1 }];
};




export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem =>
        (cartItem.id === cartItemToRemove.id));

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};