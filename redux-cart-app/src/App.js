import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitital = true;

function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.ui.isShown);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitital) {
      isInitital = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData({ items: cart.items, totalQuantity: cart.totalQuantity }));
    }


  }, [cart, dispatch]);

  return (
    <>
      <Layout>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
