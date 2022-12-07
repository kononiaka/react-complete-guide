import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/mainHeader';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome'></Redirect>
        </Route>
        <Route path='/welcome'><Welcome /></Route>
        <Route path='/products' exact><Products /></Route>
        <Route path='/products/:productId'><ProductDetail /></Route>
      </Switch>
    </div>
  );
}

export default App;
