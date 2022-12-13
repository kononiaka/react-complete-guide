import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthinticated);

  console.log("App", isAuth);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
