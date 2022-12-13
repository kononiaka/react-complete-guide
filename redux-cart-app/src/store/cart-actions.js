import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "You data is sending..."
        }));

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-redux-app-29e7f-default-rtdb.firebaseio.com/cart.json',
                { method: "PUT", body: JSON.stringify(cart) });

            if (!response.ok) {
                throw Error("Smth went wrong! ");
            }
        };
        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success",
                message: "You data sent successfully"
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: error.message
            }));
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-redux-app-29e7f-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw Error("Smth went wrong! ");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: error.message
            }));
        }
    };
};